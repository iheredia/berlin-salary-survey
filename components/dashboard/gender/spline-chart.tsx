import { useContext } from "react";
import AppContext from "@/components/context";
import { names } from "@/data/static-values";
import HighchartChart from "../components/highchart-chart";
import { getAnnotation } from "../components/highchart-chart/utils";

export default function GenderSplineChart() {
  const { user, data } = useContext(AppContext);
  if (!user.gender || !data.gender?.histogramSeries || !data.grossSalary) return;

  const { histogramSeries } = data.gender;
  const { histogramBuckets, histogramCategories } = data.grossSalary;

  const chartProps = {
    chart: { type: "spline" },

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
      pointFormat: `<strong>Percentage of {series.name}:</strong> {point.y}% <br /> <strong>Gross salary</strong>: {point.category}`,
    },
    series: histogramSeries,
    annotations: [getAnnotation(user, histogramBuckets, user.gender)],
    colors: ["#A41700", "#4B7F52"],
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
