import { useContext } from "react";
import HighchartsReact from "highcharts-react-official";
import merge from "lodash/merge";

import AppContext from "@/components/context";
import ClientChart from "./client-chart";
import styles from "./index.module.css";

const defaultChartConfig = {
  chart: {
    backgroundColor: "rgba(255, 255, 255, 0.0)",
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

type HichchartsChartProps = {
  chart?: HighchartsReact.Props;
  hidden?: boolean;
  height?: number;
};

export default function HighchartChart(props: HichchartsChartProps) {
  const { chart, hidden, height: customHeight } = props;
  const height = customHeight || 400;
  const { year } = useContext(AppContext);

  const chartOptions = merge(
    {
      chart: { height },
    },
    defaultChartConfig,
    chart
  );

  return (
    <div className={styles.chartContainer} style={{ minHeight: hidden ? "0px" : `${height}px` }}>
      {chart && (
        <>
          <div style={{ height: `${height}px` }} className={styles.highchartContainer}>
            <ClientChart {...chartOptions} />
          </div>
          <p className={styles.credits}>
            <a href={creditsLinks[year]} target="_blank">
              Data source
            </a>
          </p>
        </>
      )}
    </div>
  );
}
