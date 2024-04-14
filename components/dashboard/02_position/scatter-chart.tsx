import { useContext } from "react";
import AppContext from "@/components/context";
import HighchartChart from "../components/highchart-chart";
import { shuffle } from "lodash";

export default function PositionScatterChart() {
  const { user, data } = useContext(AppContext);

  let chart;
  if (data.position) {
    data.position.scatter[0].data = shuffle(data.position.scatter[0].data);
    data.position.scatter[0].data.forEach((point, index) => {
      point.x = index;
    });
    data.position.scatter[0].marker = {
      radius: 4,
    };

    chart = {
      chart: { type: "scatter" },

      xAxis: { visible: false },

      yAxis: {
        title: {
          text: "Total Annual Gross Salary",
        },
      },
      colors: ["var(--chart-light-green)", "var(--chart-red)"],

      tooltip: {
        pointFormat: "Total Annual Gross Salary: € {point.y:,.0f} <br /> Position: {point.name}",
      },

      legend: {
        align: "center",
        verticalAlign: "top",
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
              x: data.position.scatter[0].data.length / 2,
              y: user.grossSalary,
              id: "You",
            },
          ],
        },
      ],
    };
  }
  return <HighchartChart chart={chart} hidden={!user.position} />;
}
