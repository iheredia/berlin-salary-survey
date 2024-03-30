import HighchartChart from "./highchart-chart";
import { names } from "@/data/static-values";
import {
  User,
  NumericDimension,
  Dimension,
  HistogramSeries,
  HistogramBuckets,
  HistogramCategories,
} from "@/data/types";
import { useContext } from "react";
import AppContext from "@/components/context";

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
  dimension: NumericDimension;
  filterDimension?: Dimension;
  histogramSeries: HistogramSeries;
  histogramCategories: HistogramCategories;
  histogramBuckets: HistogramBuckets;
};

export default function HistogramChart(props: HistogramChartProps) {
  const { user } = useContext(AppContext);
  const { dimension, filterDimension, histogramSeries, histogramBuckets, histogramCategories } =
    props;

  const xAxisText =
    filterDimension && user[filterDimension]
      ? `${names[dimension]} for ${names[filterDimension]}: ${user[filterDimension]}`
      : names[dimension];

  const chartProps = {
    chart: { type: "column" },

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
