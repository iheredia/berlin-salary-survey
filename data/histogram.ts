import range from "lodash/range";
import { Dimension, NumericDimension, SurveyData, User } from "./types";

export const histogramBuckets: Record<NumericDimension, number[]> = {
  grossSalary: range(0, 210_000, 10_000),
  bonus: range(0, 100_000, 5_000),
  equity: range(0, 100_000, 5_000),
  hoursPerWeek: range(0, 52, 4),
};

export function getHistogramCategories(dimension: NumericDimension) {
  const bucketsForDimension = histogramBuckets[dimension];
  const categories: string[] = bucketsForDimension.map((bucketStart, index) => {
    const normalizedSize = bucketStart > 1000 ? `${bucketStart / 1000}k` : bucketStart;
    if (index + 1 === bucketsForDimension.length) {
      return `${normalizedSize} +`;
    }
    const nextBucketStart = bucketsForDimension[index + 1];
    const normalizedSizeNext =
      nextBucketStart > 1000 ? `${nextBucketStart / 1000}k` : nextBucketStart;
    return `${normalizedSize} to ${normalizedSizeNext}`;
  });
  return categories;
}

export function getHistogramSeries(
  yearData: SurveyData,
  dimension: NumericDimension,
  user: User,
  filterDimension?: Dimension
) {
  const bucketsForDimension = histogramBuckets[dimension];
  const data = bucketsForDimension.map(() => 0);
  const filteredData = yearData.filter((dataPoint) => {
    if (filterDimension && user[filterDimension]) {
      return dataPoint[filterDimension] === user[filterDimension];
    }
    return true;
  });
  filteredData.forEach((dataPoint) => {
    const dimensionValue = dataPoint[dimension];
    if (dimensionValue !== null && dimensionValue > 0) {
      const bucketIndex = bucketsForDimension.findIndex((bucketStart, index) => {
        if (index === bucketsForDimension.length - 1) {
          return true;
        }
        return bucketStart <= dimensionValue && dimensionValue < bucketsForDimension[index + 1];
      });
      data[bucketIndex] += 1;
    }
  });
  return { data: data.map((value, index) => ({ id: `column-${index}`, y: value })) };
}
