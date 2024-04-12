import { useContext } from "react";
import AppContext from "@/components/context";
import HighchartChart from "../components/highchart-chart";

export default function IndustryBarChart() {
  const { user, data } = useContext(AppContext);
  if (!user.industry || !data.industry) return;

  const seriesData = Object.keys(data.industry.averages)
    .map((industry) => {
      let color;
      if (industry == user.industry) {
        color = "var(--chart-green)";
      }
      return {
        name: industry,
        y: data.industry?.averages[industry] || 0,
        color,
      };
    })
    .sort((a, b) => a.y - b.y);
  const categories = seriesData.map((point) => point.name);

  const chartProps = {
    chart: { type: "bar", height: 600 },

    xAxis: {
      categories,
    },
    yAxis: {
      title: {
        text: "Average Total Annual Gross Salary",
      },
      labels: {
        format: "€ {value:,.0f}",
        rotation: -30,
      },
      plotLines: [
        {
          color: "var(--chart-red)",
          width: 2,
          value: user.grossSalary,
          zIndex: 2000,
          label: {
            text: "Your salary",
          },
        },
      ],
    },
    tooltip: {
      // TODO: Add count of respondants
      pointFormat: `<strong>Industry</strong>: {point.category} <br /> <strong>Average salary:</strong> € {point.y} `,
    },
    series: [
      {
        data: seriesData,
      },
    ],
    plotOptions: {
      bar: {
        pointPadding: 0.1,
        groupPadding: 0,
      },
    },
    colors: ["var(--chart-grey)"],
  };
  return <HighchartChart {...chartProps} />;
}
