import { useContext } from "react";
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
        text: "Total Annual Gross Salary",
      },
      categories: histogramCategories,
    },
    yAxis: {
      title: {
        text: "Percentage of respondents",
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
    colors: ["#004209"],
  };
  return <HighchartChart {...chartProps} />;
}
