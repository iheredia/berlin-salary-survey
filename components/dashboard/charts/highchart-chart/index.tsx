import { useContext } from "react";
import HighchartsReact from "highcharts-react-official";
import merge from "lodash/merge";

import { AvailableYear } from "@/data/types";
import AppContext from "@/components/context";
import ClientChart from "./client-chart";

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

  colors: ["var( --secondary-color)", "var(--accent-color)"],
};

function getCredits(year: AvailableYear) {
  // TODO: add 2024
  return {
    text: "Data from Handpicked 2023 Salary Survey",
    href: "https://handpickedberlin.com/report-on-berlin-salary-trends-survey-june-2023/",
  };
}

export default function HighchartChart(props: HighchartsReact.Props) {
  const { year } = useContext(AppContext);
  const credits = getCredits(year);
  const options = merge({}, defaultProps, { credits }, props);
  const height = options.chart.height || 400;
  return (
    <div style={{ height: `${height}px`, width: "100%" }}>
      <ClientChart {...options} />
    </div>
  );
}
