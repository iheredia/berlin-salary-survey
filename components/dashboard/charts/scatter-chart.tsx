import HighchartChart from "./highchart-chart";
import { getCredits } from "./helpers";
import { names, units, getYearData } from "@/data";
import { AvailableYear, NumericDimension } from "@/data/types";

function getTooltipFormat(dimensionX: NumericDimension, dimensionY: NumericDimension) {
  const formatX = `<strong>${names[dimensionX]}:</strong> {point.x} ${units[dimensionX]}`;
  const formatY = `<strong>${names[dimensionY]}:</strong> {point.y} ${units[dimensionY]}`;
  return `${formatX} <br /> ${formatY}`;
}

function getSeries(
  year: AvailableYear,
  dimensionX: NumericDimension,
  dimensionY: NumericDimension
) {
  const data = getYearData(year)
    .map((row) => [row[dimensionX], row[dimensionY]])
    .filter((dataPoint) => {
      return typeof dataPoint[0] === "number" && typeof dataPoint[1] === "number";
    });
  return { data };
}

type ScatterChartProps = {
  year: AvailableYear;
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

    tooltip: {
      pointFormat: getTooltipFormat(props.dimensionX, props.dimensionY),
    },
    series: [getSeries(props.year, props.dimensionX, props.dimensionY)],
  };
  return <HighchartChart {...chartProps} />;
}
