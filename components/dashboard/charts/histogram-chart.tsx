import HighchartChart from "./highchart-chart";
import { getCredits } from "./helpers";
import {
  NumericDimension,
  names,
  histogramBuckets,
  AvailableYear,
  getYearData,
  Dimension,
} from "@/data";
import { User } from "../user-form";

function getTooltipFormat(dimension: NumericDimension) {
  return `<strong>Amount of people:</strong> {point.y} <br /> <strong>${names[dimension]}</strong>: {point.category}`;
}

function getHistogramCategories(year: AvailableYear, dimension: NumericDimension) {
  const bucketsForDimension = histogramBuckets[dimension];
  const categories: string[] = bucketsForDimension.map((bucketStart, index) => {
    const normalizedSize = bucketStart > 1000 ? `${bucketStart / 1000}k` : bucketStart;
    if (index + 1 === bucketsForDimension.length) {
      return `${normalizedSize} +`;
    }
    const nextBucketStart = bucketsForDimension[index + 1];
    const normalizedSizeNext =
      nextBucketStart > 1000 ? `${nextBucketStart / 1000}k` : nextBucketStart;
    return `${normalizedSize} to ${normalizedSizeNext}`;
  });
  return categories;
}

function getHistogramSeries(
  year: AvailableYear,
  dimension: NumericDimension,
  user: User,
  filterDimension?: Dimension
) {
  const bucketsForDimension = histogramBuckets[dimension];
  const data = bucketsForDimension.map(() => 0);
  const filteredData = getYearData(year).filter((dataPoint) => {
    if (filterDimension && user[filterDimension]) {
      return dataPoint[filterDimension] === user[filterDimension];
    }
    return true;
  });
  filteredData.forEach((dataPoint) => {
    const dimensionValue = dataPoint[dimension];
    if (dimensionValue !== null && dimensionValue > 0) {
      const bucketIndex = bucketsForDimension.findIndex((bucketStart, index) => {
        if (index === bucketsForDimension.length - 1) {
          return true;
        }
        return bucketStart <= dimensionValue && dimensionValue < bucketsForDimension[index + 1];
      });
      data[bucketIndex] += 1;
    }
  });
  return { data: data.map((value, index) => ({ id: `column-${index}`, y: value })) };
}

function getAnnotation(user: User, dimension: NumericDimension) {
  const bucketsForDimension = histogramBuckets[dimension];
  const columnIndex = bucketsForDimension.findIndex((bucketStart, index) => {
    if (index === bucketsForDimension.length - 1) {
      return true;
    }
    if (!user.grossSalary) {
      return true;
    }
    return bucketStart <= user.grossSalary && user.grossSalary < bucketsForDimension[index + 1];
  });
  return {
    point: `column-${columnIndex}`,
    text: "Here you are",
    verticalAlign: "bottom",
  };
}

type HistogramChartProps = {
  year: AvailableYear;
  user: User;
  dimension: NumericDimension;
  filterDimension?: Dimension;
};

export default function HistogramChart(props: HistogramChartProps) {
  const { year, user, dimension, filterDimension } = props;
  if (!user.grossSalary) return null;
  if (filterDimension && (!user[filterDimension] || user[filterDimension] === "Prefer not to say"))
    return null;

  const xAxisText =
    filterDimension && user[filterDimension]
      ? `${names[dimension]} for ${names[filterDimension]}: ${user[filterDimension]}`
      : names[dimension];

  const chartProps = {
    chart: { type: "column" },
    credits: getCredits(year),

    xAxis: {
      title: {
        text: xAxisText,
      },
      categories: getHistogramCategories(year, dimension),
    },
    yAxis: {
      title: {
        text: "People",
      },
      labels: {
        format: "{value:,.0f}",
      },
    },
    tooltip: {
      pointFormat: getTooltipFormat(dimension),
    },
    series: [getHistogramSeries(year, dimension, user, filterDimension)],
    annotations: [
      {
        draggable: "",
        labelOptions: {
          useHTML: true,
          style: {
            fontSize: "15px",
            width: 300,
          },
        },
        labels: [getAnnotation(user, dimension)],
      },
    ],
  };
  return <HighchartChart {...chartProps} />;
}
