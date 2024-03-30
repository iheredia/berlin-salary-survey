import HighchartChart from "./highchart-chart";
import { range } from "lodash";

export type Props = {
  userPercentile: number;
};

function getSeries() {
  const colorFrom = { hue: 0, saturation: 75.73, luminosity: 46.86 };
  const colorTo = { hue: 140.22, saturation: 61.38, luminosity: 28.43 };
  const mapPercentageToRange = (from: number, to: number, percentage: number) =>
    from + ((to - from) * percentage) / 100;

  return range(100, 0, -1).map((percentile) => {
    const hue = mapPercentageToRange(colorFrom.hue, colorTo.hue, percentile);
    const saturation = mapPercentageToRange(colorFrom.saturation, colorTo.saturation, percentile);
    const luminosity = mapPercentageToRange(colorFrom.luminosity, colorFrom.luminosity, percentile);

    return {
      name: `Percentile ${percentile}`,
      data: [
        {
          y: 1,
          id: `percentile-${percentile}`,
        },
      ],
      color: `hsl(${hue}deg, ${saturation}%, ${luminosity}%)`,
    };
  });
}

export default function DeviationFromMeanChart(props: Props) {
  const { userPercentile } = props;

  const tooltipText = "You are here";

  const chartProps = {
    chart: { type: "bar", height: 180, margin: [0, 0, 0, 0], spacingBottom: 0 },
    credits: {
      position: {
        y: -50,
      },
    },

    xAxis: { visible: false },
    yAxis: { visible: false },
    tooltip: { enabled: false },

    series: getSeries(),
    plotOptions: {
      bar: {
        borderWidth: 0,
        pointWidth: 25,
      },
      series: {
        stacking: "percent",
        dataLabels: {
          enabled: false,
        },
        states: {
          inactive: {
            opacity: 1,
          },
        },
      },
    },

    annotations: [
      {
        draggable: "",
        labelOptions: {
          useHTML: true,
          style: {
            fontSize: "15px",
            width: 300,
          },
        },
        labels: [
          {
            point: `percentile-${userPercentile || 1}`,
            text: tooltipText,
            verticalAlign: "bottom",
          },
        ],
      },
    ],
  };

  return (
    <div style={{ width: "100%" }}>
      <HighchartChart {...chartProps} />
    </div>
  );
}
