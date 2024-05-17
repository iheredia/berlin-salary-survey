import { User, HistogramBuckets } from "@/data/types";

export function getHighlightedId(
  user: User,
  histogramBuckets: HistogramBuckets,
  serieName: string
) {
  const columnIndex = histogramBuckets.findIndex((bucketStart, index) => {
    if (index === histogramBuckets.length - 1) {
      return true;
    }
    if (!user.grossSalary) {
      return true;
    }
    return bucketStart <= user.grossSalary && user.grossSalary < histogramBuckets[index + 1];
  });
  return `${serieName}-${columnIndex}`;
}
export function youAreHereAnnotation(id: string) {
  return {
    draggable: "",
    labelOptions: {
      style: {
        fontSize: "15px",
        width: 300,
      },
    },
    labels: [
      {
        point: id,
        text: "You are here",
        verticalAlign: "bottom",
      },
    ],
  };
}
