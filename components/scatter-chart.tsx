import merge from "lodash/merge";
import HighchartChart from "./highchart-chart";
import { getCredits, getSeries, getTooltipFormat } from "./helpers";
import { NumericDimension, names, units } from "@/data";

type ScatterChartProps = {
  year: 2023 | 2024;
  dimensionX: NumericDimension;
  dimensionY: NumericDimension;
};

export default function ScatterChart(props: ScatterChartProps) {
  const chartProps = merge(
    {
      chart: { type: "scatter", backgroundColor: "rgba(255, 255, 255, 0.0)" },
      title: false,
      credits: getCredits(props.year),

      xAxis: {
        title: {
          text: names[props.dimensionX],
        },
        labels: {
          format: `{value:,.0f} ${units[props.dimensionX]}`,
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
      },
      yAxis: {
        title: {
          text: names[props.dimensionY],
        },
        labels: {
          format: `{value:,.0f} ${units[props.dimensionY]}`,
        },
      },

      plotOptions: {
        scatter: {
          showInLegend: false,
          marker: {
            radius: 2,
            symbol: "circle",
          },
          tooltip: {
            pointFormat: getTooltipFormat(props.dimensionX, props.dimensionY),
          },
        },
      },

      series: [getSeries(props.year, props.dimensionX, props.dimensionY)],
    },
    props
  );
  return <HighchartChart {...chartProps} />;
}
