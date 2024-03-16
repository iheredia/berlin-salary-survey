"use client";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function HighchartChart(props: HighchartsReact.Props) {
  return <HighchartsReact highcharts={Highcharts} options={props} />;
}
