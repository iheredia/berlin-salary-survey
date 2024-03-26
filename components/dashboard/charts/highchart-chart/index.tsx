import HighchartsReact from "highcharts-react-official";
import ClientChart from "./client-chart";
import merge from "lodash/merge";

const defaultProps = {
  chart: {
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    height: 400,
  },
  title: false,
  legend: false,
  plotOptions: {
    scatter: {
      marker: {
        radius: 2,
        symbol: "circle",
      },
    },
  },

  xAxis: {
    startOnTick: true,
    endOnTick: true,
    showLastLabel: true,
  },

  tooltip: {
    headerFormat: "",
    footerFormat: "",
  },
};

export default function HighchartChart(props: HighchartsReact.Props) {
  const options = merge({}, defaultProps, props);
  const height = options.chart.height || 400;
  return (
    <div style={{ height: `${height}px` }}>
      <ClientChart {...options} />
    </div>
  );
}
