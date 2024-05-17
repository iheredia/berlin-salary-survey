import { useContext } from "react";
import AppContext from "@/components/context";
import HighchartChart from "../components/highchart-chart";
import { youAreHereAnnotation, getHighlightedId } from "../components/highchart-chart/utils";

export default function SatisfactionHistogramChart() {
  const { user, data } = useContext(AppContext);

  let chart;
  if (data.satisfaction && data.grossSalary) {
    const { histogramBuckets, histogramCategories } = data.grossSalary;
    const { histogramSeries } = data.satisfaction;

    const highlightedId = getHighlightedId(user, histogramBuckets, `${user.satisfaction}`);
    chart = {
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
        top: "10%",
        height: "90%",
      },
      tooltip: {
        pointFormat: `<strong>Percentage of people:</strong> {point.y}% <br /> <strong>Gross salary</strong>: € {point.category} <br /> <strong>Satisfaction</strong>: {series.name}`,
      },
      series: histogramSeries,
      plotOptions: {
        column: {
          pointPadding: 0.1,
          groupPadding: 0,
          stacking: "normal",
          borderWidth: 0,
        },
      },
      // z-index conflicts with the tooltip hover
      // The position needs to be fixed for the peaks of the charts
      annotations: [youAreHereAnnotation(highlightedId)], // Fix
      colors: ["#008000", "#73e600", "#b3b300", "#ff8000", "#b30000"],
    };
  }
  return <HighchartChart chart={chart} hidden={!user.satisfaction} />;
}
