import { useContext } from "react";
import AppContext from "@/components/context";
import HighchartChart from "../components/highchart-chart";
import { getAnnotation } from "../components/highchart-chart/utils";
import styles from "./spline-chart.module.css";

export default function GenderSplineChart() {
  const { user, data } = useContext(AppContext);
  if (!user.gender || !data.gender?.histogramSeries || !data.grossSalary) return;

  const { histogramSeries } = data.gender;
  const { histogramBuckets, histogramCategories } = data.grossSalary;

  if (histogramSeries[0].name === user.gender) {
    histogramSeries[0].color = "var(--chart-red)";
    histogramSeries[1].color = "var(--chart-light-green)";
  } else {
    histogramSeries[0].color = "var(--chart-light-red)";
    histogramSeries[1].color = "var(--chart-green)";
  }

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
    legend: {
      align: "right",
      verticalAlign: "top",
      floating: true,
      x: 0,
      y: 0,
    },
  };
  return (
    <>
      <HighchartChart {...chartProps} />
      <p className={styles.disclaimer}>
        The non-binary group was excluded due to the insufficient number of responses.
      </p>
    </>
  );
}
