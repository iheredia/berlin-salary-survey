import { useContext } from "react";
import { names } from "@/data/static-values";
import AppContext from "@/components/context";
import HighchartChart from "../components/highchart-chart";
import { getAnnotation } from "../components/highchart-chart/utils";

export default function SalaryHistogramChart() {
  const { user, data } = useContext(AppContext);
  if (!data.grossSalary?.histogramCategories) return;

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
        text: "Percentage of people",
      },
      labels: {
        format: "{value:,.0f}%",
      },
    },
    tooltip: {
      pointFormat: `<strong>Percentage of people:</strong> {point.y}% <br /> <strong>Gross salary</strong>: € {point.category}`,
    },
    series: histogramSeries,
    annotations: [getAnnotation(user, histogramBuckets, "grossSalary")],
    colors: ["var( --secondary-color)", "var(--accent-color)"],
  };
  return <HighchartChart {...chartProps} />;
}
