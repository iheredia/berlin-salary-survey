import { useContext } from "react";
import AppContext from "@/components/context";
import HighchartChart from "../components/highchart-chart";
import { getAnnotation } from "../components/highchart-chart/utils";
import { isIndividualContributor } from "@/data/utils";

export default function RoleChart() {
  const { user, data } = useContext(AppContext);

  let chart;
  if (user.role && data.role && data.grossSalary) {
    const { histogramCategories, histogramBuckets } = data.grossSalary;
    const { histogramSeries } = data.role;

    if (isIndividualContributor(user)) {
      histogramSeries[0].color = "var(--chart-red)";
      histogramSeries[1].color = "var(--chart-light-green)";
    } else {
      histogramSeries[0].color = "var(--chart-light-red)";
      histogramSeries[1].color = "var(--chart-green)";
    }

    chart = {
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
      plotOptions: {
        column: {
          pointPadding: 0.1,
          groupPadding: 0,
        },
      },
    };
  }
  return <HighchartChart chart={chart} hidden={!user.role} />;
}
