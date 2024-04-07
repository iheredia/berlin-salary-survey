import HighchartChart from "../highchart-chart";
import { names } from "@/data/static-values";
import {
  NumericDimension,
  Dimension,
  HistogramSeries,
  HistogramBuckets,
  HistogramCategories,
} from "@/data/types";
import { useContext } from "react";
import AppContext from "@/components/context";
import { getTooltipFormat, getAnnotation } from "../highchart-chart/utils";

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
    chart: { type: "spline" },

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
        format: "{value:,.0f}%",
      },
    },
    tooltip: {
      pointFormat: getTooltipFormat(dimension),
    },
    series: histogramSeries,
    annotations: [getAnnotation(user, histogramBuckets)],
  };
  return <HighchartChart {...chartProps} />;
}
