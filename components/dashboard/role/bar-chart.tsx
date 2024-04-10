import { useContext } from "react";
import AppContext from "@/components/context";
import HighchartChart from "../components/highchart-chart";
import { getAnnotation } from "../components/highchart-chart/utils";

export default function RoleBarChart() {
  const { user, data } = useContext(AppContext);
  if (!user.role || !data.role || !data.grossSalary) return;

  const { histogramCategories, histogramBuckets } = data.grossSalary;
  const { histogramSeries } = data.role;

  const chartProps = {
    chart: {
      type: "column",
    },
    xAxis: {
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
      pointFormat: `<strong>Percentage of {series.name}:</strong> {point.y}% <br /> <strong>Gross salary</strong>: {point.category}`,
    },
    series: histogramSeries,
    annotations: [getAnnotation(user, histogramBuckets, user.role)],
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
