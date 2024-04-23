"use client";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HighchartsAnnotations from "highcharts/modules/annotations";
import HCMore from "highcharts/highcharts-more";

if (typeof Highcharts === "object") {
  HighchartsAnnotations(Highcharts);
  HCMore(Highcharts);
}

export default function ClientChart(options: HighchartsReact.Props) {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
