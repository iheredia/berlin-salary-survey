"use client";
import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";

export default function HighchartChart(props: HighchartsReact.Props) {
  return <HighchartsReact highcharts={Highcharts} {...props} />;
}
