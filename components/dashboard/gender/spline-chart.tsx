import { useContext } from "react";
import AppContext from "@/components/context";
import { names } from "@/data/static-values";
import HighchartChart from "../components/highchart-chart";
import { getTooltipFormat, getAnnotation } from "../components/highchart-chart/utils";

export default function GenderSplineChart() {
  const { user, data } = useContext(AppContext);
  if (!user.gender || !data.gender?.histogramCategories) return;

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
        text: "Percentage of people",
      },
      labels: {
        format: "{value:,.0f}%",
      },
    },
    tooltip: {
      pointFormat: getTooltipFormat("grossSalary"),
    },
    series: histogramSeries,
    annotations: [getAnnotation(user, histogramBuckets, user.gender)],
    colors: ["#C00CAE", "#0400F3"],
    legend: {
      align: "right",
      verticalAlign: "top",
      floating: true,
      x: 0,
      y: 0,
    },
  };
  return <HighchartChart {...chartProps} />;
}
