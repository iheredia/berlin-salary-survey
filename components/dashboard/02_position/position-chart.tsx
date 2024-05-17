import { useContext } from "react";
import AppContext from "@/components/context";
import HighchartChart from "../components/highchart-chart";
import { shuffle } from "lodash";
import { youAreHereAnnotation } from "../components/highchart-chart/utils";

export default function PositionChart() {
  const { user, data } = useContext(AppContext);

  let chart;
  if (data.position) {
    data.position.scatter[0].data = shuffle(data.position.scatter[0].data);
    data.position.scatter[0].data.forEach((point, index) => {
      point.x = index + 1;
    });
    data.position.scatter[0].marker = {
      radius: 4,
    };

    chart = {
      chart: { type: "scatter" },

      xAxis: {
        visible: false,
        min: 0,
        max: data.position.scatter[0].data.length + 1,
        endOnTick: false,
      },

      yAxis: {
        title: {
          text: "Total Annual Gross Salary",
        },
      },
      colors: ["var(--chart-light-green)", "var(--chart-red)"],

      tooltip: {
        pointFormat:
          "Total Annual Gross Salary: <strong>€ {point.y:,.0f}</strong> <br /> Position: <strong>{point.name}</strong>",
      },

      series: [
        ...data.position.scatter,
        {
          name: "You",
          marker: {
            radius: 6,
          },
          data: [
            {
              x: (data.position.scatter[0].data.length + 1) / 2,
              y: user.grossSalary,
              id: "You",
            },
          ],
        },
      ],
      annotations: [youAreHereAnnotation("You")],
    };
  }
  return <HighchartChart chart={chart} hidden={!user.position} />;
}
