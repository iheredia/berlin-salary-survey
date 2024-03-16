import HighchartChart from "./highchart-chart";
import { getCredits, getSeries, getTooltipFormat } from "./helpers";
import { NumericDimension, names, units } from "@/data";

type HistogramChartProps = {
  year: 2023 | 2024;
  dimension: NumericDimension;
};

export default function HistogramChart(props: HistogramChartProps) {
  const chartProps = {};
  return <HighchartChart {...chartProps} />;
}
