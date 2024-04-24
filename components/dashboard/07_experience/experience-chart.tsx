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
      series: [
        {
          type: "columnrange",
          color: "#fff",
          data: data.experience.series.map((serie) => {
            const sortedData = serie.data.sort((a, b) => a.y - b.y);
            return [(sortedData.at(0)?.y || 0) - 2000, (sortedData.at(-1)?.y || 0) + 2000];
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
            pointFormat: "Measurement: {point.y:.3f}",
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
  return <HighchartChart chart={chart} hidden={!user.experience} />;
}