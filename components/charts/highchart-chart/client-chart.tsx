"use client";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function ClientChart(options: HighchartsReact.Props) {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
