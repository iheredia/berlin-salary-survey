import { useContext } from "react";
import AppContext from "@/components/context";
import HighchartChart from "../components/highchart-chart";

export default function ExperienceChart() {
  const { user, data } = useContext(AppContext);

  let chart;
  if (user.experience && data.experience && data.grossSalary) {
    chart = {
      chart: {
        inverted: true,
      },
      xAxis: {
        categories: data.experience.series.map((serie) => serie.name),
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
              y: user.grossSalary && user.grossSalary < 72_000 ? 320 : 1,
            },
          },
        ],
      },
      series: [
        {
          type: "columnrange",
          borderColor: "transparent",
          data: data.experience.series.map((serie) => {
            const sortedData = serie.data.sort((a, b) => a.y - b.y);
            const low = (sortedData.at(0)?.y || 0) - 2000;
            const high = (sortedData.at(-1)?.y || 0) + 2000;
            return {
              low,
              high,
              color: serie.name === user.experience ? "#fff" : "#ddd",
            };
          }),
        },
        ...data.experience.series.map((serie) => ({ ...serie, type: "scatter" })),
      ],
      plotOptions: {
        scatter: {
          showInLegend: false,
          jitter: {
            x: 0.3,
            y: 0,
          },
          marker: {
            radius: 2,
            symbol: "circle",
          },
          tooltip: {
            pointFormat: `<strong>Total Annual Gross Salary</strong> € {point.y} <br /> <strong>Experience years</strong>: {point.category}`,
          },
        },
        columnrange: {
          enableMouseTracking: false,
          pointPadding: 0.1,
          groupPadding: 0,
        },
      },
    };
  }
  return <HighchartChart height={500} chart={chart} hidden={!user.experience} />;
}
