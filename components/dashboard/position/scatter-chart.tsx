import { useContext } from "react";
import AppContext from "@/components/context";
import HighchartChart from "../components/highchart-chart";

export default function PositionScatterChart() {
  const { user, data } = useContext(AppContext);
  if (!user.grossSalary || !user.position || !data.position) return;

  data.position.scatter[0].jitter = {
    x: 0.4,
    y: 0,
  };

  data.position.scatter[0].marker = {
    radius: 4,
  };

  const chartProps = {
    chart: { type: "scatter" },

    xAxis: { visible: false },

    yAxis: {
      title: {
        text: "Total Annual Gross Salary",
      },
    },
    colors: ["var(--chart-light-green)", "var(--chart-red)"],

    tooltip: {
      pointFormat: "Total Annual Gross Salary: € {point.y:,.0f}",
    },

    legend: {
      align: "right",
      verticalAlign: "top",
      floating: true,
      x: 0,
      y: 0,
    },

    series: [
      ...data.position.scatter,
      {
        name: "You",
        marker: {
          radius: 6,
        },
        data: [{ y: user.grossSalary, id: "You" }],
      },
    ],
  };
  return <HighchartChart {...chartProps} />;
}
