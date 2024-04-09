import { User, HistogramBuckets } from "@/data/types";

export function getAnnotation(user: User, histogramBuckets: HistogramBuckets, serieName: string) {
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
        point: `${serieName}-${columnIndex}`,
        text: "You are here",
        verticalAlign: "bottom",
      },
    ],
  };
}
