import { useContext } from "react";
import AppContext from "@/components/context";
import HighchartChart from "../components/highchart-chart";
import { getAnnotation } from "../components/highchart-chart/utils";
import styles from "./gender-chart.module.css";

export default function GenderChart() {
  const { user, data } = useContext(AppContext);

  let chart;
  if (data.gender && data.grossSalary && user.gender) {
    const { histogramSeries } = data.gender;
    const { histogramBuckets, histogramCategories } = data.grossSalary;

    if (histogramSeries[0].name === user.gender) {
      histogramSeries[0].color = "var(--chart-red)";
      histogramSeries[1].color = "var(--chart-light-green)";
    } else {
      histogramSeries[0].color = "var(--chart-light-red)";
      histogramSeries[1].color = "var(--chart-green)";
    }

    chart = {
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
  }
  return (
    <>
      <HighchartChart chart={chart} hidden={!user.gender} />
      {chart && (
        <p className={styles.disclaimer}>
          The non-binary group was excluded due to the insufficient number of responses.
        </p>
      )}
    </>
  );
}
