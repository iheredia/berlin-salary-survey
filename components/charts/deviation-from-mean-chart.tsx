import HighchartChart from "./highchart-chart";
import { getCredits } from "../helpers";
import { AvailableYear, calculatePercentile } from "@/data";
import { User } from "../user-form";
import { range } from "lodash";

export type Props = {
  year: AvailableYear;
  user: User;
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

function getCommentForPercentile(userPercentile: number) {
  const upperDifference = 100 - userPercentile;
  return userPercentile < 20
    ? `😨 you are in the bottom range of salaries. ${upperDifference}% of people earn more than you in Berlin 💸`
    : userPercentile < 50
    ? `😕 you are not all the way at the bottom but there is a lot of room for improvement. ${upperDifference}% of people earn more than you`
    : userPercentile < 75
    ? `Not bad. You are in the upper range of salaries, earning more than ${upperDifference}% of people.`
    : `🥳 niiice. You are in the top range of salaries. Only ${upperDifference}% earn more than you 💰💰`;
}

export default function DeviationFromMeanChart(props: Props) {
  const { user } = props;
  if (!user.salary) return null;

  const userPercentile = calculatePercentile(props.year, user.salary) || 1;
  const tooltipText = getCommentForPercentile(userPercentile);

  const chartProps = {
    chart: { type: "bar", height: 230 },
    credits: getCredits(props.year),

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
        stacking: "normal",
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
            point: `percentile-${userPercentile}`,
            text: tooltipText,
            verticalAlign: "bottom",
          },
        ],
      },
    ],
  };

  return (
    <div>
      <h3>Gross salary comparison 💰💰</h3>
      <HighchartChart {...chartProps} />
    </div>
  );
}
