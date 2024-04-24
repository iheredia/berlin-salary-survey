import range from "lodash/range";
import { Serie, SurveyData } from "../types";

export const histogramBuckets = range(0, 210_000, 10_000);

export const histogramCategories: string[] = histogramBuckets.map((bucketStart, index) => {
  const normalizedSize = `${bucketStart / 1000}${bucketStart > 0 ? "k" : ""}`;
  if (index + 1 === histogramBuckets.length) {
    return `${normalizedSize} +`;
  }
  const nextBucketStart = histogramBuckets[index + 1];
  const normalizedSizeNext = `${nextBucketStart / 1000}k`;
  return `${normalizedSize} to ${normalizedSizeNext}`;
});

function normalizeSerie(serie: Serie): Serie {
  const total = serie.data.reduce((accum, val) => accum + val.y, 0);
  return {
    ...serie,
    data: serie.data.map((val) => ({
      ...val,
      y: Math.round((val.y * 1000) / total) / 10,
    })),
  };
}

export function getSeries(yearData: SurveyData, name: string) {
  const buckets = histogramBuckets.map(() => 0);
  yearData.forEach(({ grossSalary }) => {
    if (grossSalary !== null && grossSalary > 0) {
      const bucketIndex = histogramBuckets.findIndex((bucketStart, index) => {
        if (index === histogramBuckets.length - 1) {
          return true;
        }
        return bucketStart <= grossSalary && grossSalary < histogramBuckets[index + 1];
      });
      buckets[bucketIndex] += 1;
    }
  });
  const data = buckets.map((value, index) => {
    return {
      id: `${name}-${index}`,
      y: value,
    };
  });

  return normalizeSerie({ data, name });
}
