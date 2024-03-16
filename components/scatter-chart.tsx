import HighchartChart from "./highchart-chart";
import { getCredits, getSeries, getTooltipFormat } from "./helpers";
import { NumericDimension, names, units } from "@/data";

type ScatterChartProps = {
  year: 2023 | 2024;
  dimensionX: NumericDimension;
  dimensionY: NumericDimension;
};

export default function ScatterChart(props: ScatterChartProps) {
  const chartProps = {
    chart: { type: "scatter" },
    credits: getCredits(props.year),

    xAxis: {
      title: {
        text: names[props.dimensionX],
      },
      labels: {
        format: `{value:,.0f} ${units[props.dimensionX]}`,
      },
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
        tooltip: {
          pointFormat: getTooltipFormat(props.dimensionX, props.dimensionY),
        },
      },
    },

    series: [getSeries(props.year, props.dimensionX, props.dimensionY)],
  };
  return <HighchartChart {...chartProps} />;
}
