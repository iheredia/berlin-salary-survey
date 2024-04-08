import { useContext } from "react";
import AppContext from "@/components/context";
import { names } from "@/data/static-values";
import HighchartChart from "../components/highchart-chart";
import { getTooltipFormat, getAnnotation } from "../components/highchart-chart/utils";

export default function GenderSplineChart() {
  const { user, data } = useContext(AppContext);
  if (!data.gender?.histogramCategories) return;

  const { histogramSeries, histogramBuckets, histogramCategories } = data.gender;

  const chartProps = {
    chart: { type: "spline" },

    xAxis: {
      title: {
        text: names.grossSalary,
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
      pointFormat: getTooltipFormat("grossSalary"),
    },
    series: histogramSeries,
    annotations: [getAnnotation(user, histogramBuckets)],
    colors: ["#C00CAE", "#0400F3"],
  };
  return <HighchartChart {...chartProps} />;
}
