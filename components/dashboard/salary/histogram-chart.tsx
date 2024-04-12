import { useContext } from "react";
import AppContext from "@/components/context";
import HighchartChart from "../components/highchart-chart";
import { getAnnotation, getHighlightedId } from "../components/highchart-chart/utils";

export default function SalaryHistogramChart() {
  const { user, data } = useContext(AppContext);
  if (!data.grossSalary?.histogramCategories) return;

  const { histogramSeries, histogramBuckets, histogramCategories } = data.grossSalary;

  const highlightedId = getHighlightedId(user, histogramBuckets, histogramSeries[0].name);

  histogramSeries[0].data.forEach((point) => {
    if (point.id === highlightedId) {
      point.color = "#004209";
    }
  });

  const chartProps = {
    chart: { type: "column" },

    xAxis: {
      title: {
        text: "Total Annual Gross Salary",
      },
      categories: histogramCategories,
    },
    yAxis: {
      title: {
        text: "Percentage of respondents",
      },
      labels: {
        format: "{value:,.0f}%",
      },
    },
    tooltip: {
      pointFormat: `<strong>Percentage of people:</strong> {point.y}% <br /> <strong>Gross salary</strong>: € {point.category}`,
    },
    series: histogramSeries,
    plotOptions: {
      column: {
        pointPadding: 0.1,
        groupPadding: 0,
      },
    },
    // z-index conflicts with the tooltip hover
    // The position needs to be fixed for the peaks of the charts
    annotations: [getAnnotation(user, histogramBuckets, "grossSalary")],
    colors: ["#bbb"],
  };
  return <HighchartChart {...chartProps} />;
}
