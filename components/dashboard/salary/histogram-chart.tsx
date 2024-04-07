import { useContext } from "react";
import { names } from "@/data/static-values";
import AppContext from "@/components/context";
import HighchartChart from "../highchart-chart";
import { getTooltipFormat, getAnnotation } from "../highchart-chart/utils";

export default function SalaryHistogramChart() {
  const { user, data } = useContext(AppContext);
  if (!data.grossSalary) return;

  const { histogramSeries, histogramBuckets, histogramCategories } = data.grossSalary;

  const chartProps = {
    chart: { type: "column" },

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
        format: "{value:,.0f}",
      },
    },
    tooltip: {
      pointFormat: getTooltipFormat("grossSalary"),
    },
    series: histogramSeries,
    annotations: [getAnnotation(user, histogramBuckets)],
  };
  return <HighchartChart {...chartProps} />;
}
