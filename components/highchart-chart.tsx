"use client";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import merge from "lodash/merge";

const defaultProps = {
  chart: { backgroundColor: "rgba(255, 255, 255, 0.0)" },
  title: false,
  legend: false,
  plotOptions: {
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
};

export default function HighchartChart(props: HighchartsReact.Props) {
  const options = merge({}, defaultProps, props);
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
