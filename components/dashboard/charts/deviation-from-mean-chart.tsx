import HighchartChart from "./highchart-chart";
import { getCredits } from "./helpers";
import { calculatePercentile, names, units } from "@/data";
import { AvailableYear, Dimension, User } from "@/data/types";
import { range } from "lodash";

export type Props = {
  year: AvailableYear;
  user: User;
  dimension: Dimension;
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

function getCommentForPercentile(userPercentile: number, user: User, dimension: Dimension) {
  const upperDifference = 100 - userPercentile;
  return userPercentile < 20
    ? `😨 you are in the bottom range of salaries. ${upperDifference}% of people earn more than you in Berlin 💸`
    : userPercentile < 50
    ? `😕 you are not all the way at the bottom but there is a lot of room for improvement. ${upperDifference}% of people earn more than you`
    : userPercentile < 75
    ? `Not bad. You are in the upper range of salaries, earning more than ${userPercentile}% of people.`
    : userPercentile === 100
    ? "Oh wow. Are you sure you wrote that? You earn more than everyone who took the survey 😎"
    : `🥳 niiice. You are in the top range of salaries. Only ${upperDifference}% earn more than you 💰💰`;
}

function getTitle(dimension: Dimension) {
  switch (dimension) {
    case "grossSalary":
      return "Gross salary comparison 🤑";
    case "age":
      return "How do you compare with people of your same age? 👶👵";
    case "gender":
      "How much people of your same gender earn? 🏳️‍🌈";
    case "experience":
      return "Do you earn the same as people with same experience? 💸";
    case "citizenship":
      return "Does your passport puts you in a different position? 🇪🇺🌍";
    case "education":
      return "People with your same education level earn more? 🧑‍🏫";
    case "organizationType":
      return "Is your salary ok for your organization type? 🏛️🏫";
    case "industry":
      return "How is your salary for your industry? 🧪🔬💻";
    case "role":
      return "Is your role paid fairly? 👷👩‍✈️";
    default:
      return `${names[dimension]} comparison`;
  }
}

export default function DeviationFromMeanChart(props: Props) {
  const { user, dimension } = props;
  if (!user.grossSalary) return null;
  if (!user[dimension] || user[dimension] === "Prefer not to say") return null;

  const userPercentile = calculatePercentile(props.year, user, dimension) || 1;
  const tooltipText = getCommentForPercentile(userPercentile, user, dimension);

  const chartProps = {
    chart: { type: "bar", height: 180, margin: [0, 0, 0, 0], spacingBottom: 0 },
    credits: {
      ...getCredits(props.year),
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
      <h3>{getTitle(dimension)}</h3>
      <p>
        {names[dimension]}: {user[dimension]} {units[dimension]}
      </p>
      <HighchartChart {...chartProps} />
    </div>
  );
}
