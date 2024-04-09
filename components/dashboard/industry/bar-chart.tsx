import { useContext } from "react";
import AppContext from "@/components/context";
import HighchartChart from "../components/highchart-chart";
import gradstop from "gradstop";

export default function IndustryBarChart() {
  const { user, data } = useContext(AppContext);
  if (!user.industry || !data.industry) return;

  const gradient = gradstop({
    stops: Object.keys(data.industry.averages).length,
    inputFormat: "hex",
    colorArray: ["#f33b1d", "#d1a153"],
  });

  const seriesData = Object.keys(data.industry.averages)
    .map((industry) => ({
      name: industry,
      y: data.industry?.averages[industry] || 0,
      color: "",
    }))
    .sort((a, b) => a.y - b.y)
    .map((point, index) => {
      point.color = gradient[index];
      return point;
    });
  const categories = seriesData.map((point) => point.name);

  const chartProps = {
    chart: { type: "bar", height: 600 },

    xAxis: {
      categories,
    },
    yAxis: {
      title: {
        text: "Average salary",
      },
      labels: {
        format: "€ {value:,.0f}",
      },
    },
    tooltip: {
      pointFormat: `<strong>Industry</strong>: {point.category} <br /> <strong>Average salary:</strong> € {point.y} `,
    },
    series: [
      {
        data: seriesData,
      },
    ],
  };
  console.log(chartProps);
  return <HighchartChart {...chartProps} />;
}
