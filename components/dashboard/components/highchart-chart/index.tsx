import { useContext } from "react";
import HighchartsReact from "highcharts-react-official";
import merge from "lodash/merge";

import AppContext from "@/components/context";
import ClientChart from "./client-chart";
import styles from "./index.module.css";

const defaultProps = {
  chart: {
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    height: 400,
    style: {
      fontFamily: "var(--montserrat)",
    },
  },
  title: false,
  legend: false,
  credits: false,
  plotOptions: {
    series: {
      animation: false,
    },
    scatter: {
      marker: {
        radius: 2,
        symbol: "circle",
      },
    },
  },

  xAxis: {
    startOnTick: true,
    endOnTick: true,
    showLastLabel: true,
  },

  tooltip: {
    headerFormat: "",
    footerFormat: "",
  },
};

const creditsLinks = {
  2023: "https://handpickedberlin.com/report-on-berlin-salary-trends-survey-june-2023/",
  2024: "https://handpickedberlin.com/startup-tech-salary-trends-berlin/",
};

export default function HighchartChart(props: HighchartsReact.Props) {
  const { year } = useContext(AppContext);
  const options = merge({}, defaultProps, props);
  const height = options.chart.height || 400;
  return (
    <div className={styles.chartContainer}>
      <div style={{ height: `${height}px` }} className={styles.highchartContainer}>
        <ClientChart {...options} />
      </div>
      <p className={styles.credits}>
        <a href={creditsLinks[year]}>
          Data from Handpicked Berlin&apos;s Salary Trends {year} survey
        </a>
      </p>
    </div>
  );
}
