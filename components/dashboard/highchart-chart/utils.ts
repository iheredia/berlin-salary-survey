import { User, NumericDimension, HistogramBuckets } from "@/data/types";
import { names } from "@/data/static-values";

export function getTooltipFormat(dimension: NumericDimension) {
  return `<strong>Amount of people:</strong> {point.y} <br /> <strong>${names[dimension]}</strong>: {point.category}`;
}

export function getAnnotation(user: User, histogramBuckets: HistogramBuckets) {
  const columnIndex = histogramBuckets.findIndex((bucketStart, index) => {
    if (index === histogramBuckets.length - 1) {
      return true;
    }
    if (!user.grossSalary) {
      return true;
    }
    return bucketStart <= user.grossSalary && user.grossSalary < histogramBuckets[index + 1];
  });
  return {
    draggable: "",
    labelOptions: {
      useHTML: true,
      style: {
        fontSize: "15px",
        width: 300,
      },
    },
    labels: [
      {
        point: `column-${columnIndex}`,
        text: "You are here",
        verticalAlign: "bottom",
      },
    ],
  };
}
