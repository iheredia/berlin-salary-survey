import HighchartChart from "./highchart-chart";
import { getCredits } from "./helpers";
import { names } from "@/data/static-values";
import {
  User,
  NumericDimension,
  AvailableYear,
  Dimension,
  HistogramSeries,
  HistogramBuckets,
  HistogramCategories,
} from "@/data/types";

function getTooltipFormat(dimension: NumericDimension) {
  return `<strong>Amount of people:</strong> {point.y} <br /> <strong>${names[dimension]}</strong>: {point.category}`;
}

function getAnnotation(
  user: User,
  dimension: NumericDimension,
  histogramBuckets: HistogramBuckets
) {
  const columnIndex = histogramBuckets.findIndex((bucketStart, index) => {
    if (index === histogramBuckets.length - 1) {
      return true;
    }
    if (!user.grossSalary) {
      return true;
    }
    return bucketStart <= user.grossSalary && user.grossSalary < histogramBuckets[index + 1];
  });
  return {
    point: `column-${columnIndex}`,
    text: "You are here",
    verticalAlign: "bottom",
  };
}

type HistogramChartProps = {
  year: AvailableYear;
  user: User;
  dimension: NumericDimension;
  filterDimension?: Dimension;
  histogramSeries: HistogramSeries;
  histogramCategories: HistogramCategories;
  histogramBuckets: HistogramBuckets;
};

export default function HistogramChart(props: HistogramChartProps) {
  const {
    year,
    user,
    dimension,
    filterDimension,
    histogramSeries,
    histogramBuckets,
    histogramCategories,
  } = props;

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
      categories: histogramCategories,
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
    series: [histogramSeries],
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
        labels: [getAnnotation(user, dimension, histogramBuckets)],
      },
    ],
  };
  return (
    <div style={{ width: "100%" }}>
      <HighchartChart {...chartProps} />
    </div>
  );
}
