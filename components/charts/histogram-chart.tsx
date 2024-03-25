import HighchartChart from "./highchart-chart";
import { getCredits, getYearData } from "./helpers";
import { NumericDimension, names, histogramBuckets, AvailableYear } from "@/data";

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

function getHistogramSeries(year: AvailableYear, dimension: NumericDimension) {
  const bucketsForDimension = histogramBuckets[dimension];
  const data = bucketsForDimension.map(() => 0);
  getYearData(year).forEach((dataPoint) => {
    const dimensionValue = dataPoint[dimension];
    if (dimensionValue !== null) {
      const bucketIndex =
        bucketsForDimension.findIndex((bucketStart) => bucketStart > dimensionValue) - 1;
      data[bucketIndex] += 1;
    }
  });
  return { data };
}

type HistogramChartProps = {
  year: AvailableYear;
  dimension: NumericDimension;
};

export default function HistogramChart(props: HistogramChartProps) {
  const chartProps = {
    chart: { type: "column" },
    credits: getCredits(props.year),

    xAxis: {
      title: {
        text: names[props.dimension],
      },
      categories: getHistogramCategories(props.year, props.dimension),
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
      pointFormat: getTooltipFormat(props.dimension),
    },
    series: [getHistogramSeries(props.year, props.dimension)],
  };
  return <HighchartChart {...chartProps} />;
}
