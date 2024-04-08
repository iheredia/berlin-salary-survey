import range from "lodash/range";
import {
  Dimension,
  HistogramSerie,
  HistogramSeries,
  NumericDimension,
  SurveyData,
  User,
} from "./types";
import { values } from "./static-values";

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

function getHistogramSingleSeries(filteredData: SurveyData, name: string) {
  const bucketsForDimension = histogramBuckets.grossSalary;
  const buckets = bucketsForDimension.map(() => 0);
  filteredData.forEach((dataPoint) => {
    const dimensionValue = dataPoint.grossSalary;
    if (dimensionValue !== null && dimensionValue > 0) {
      const bucketIndex = bucketsForDimension.findIndex((bucketStart, index) => {
        if (index === bucketsForDimension.length - 1) {
          return true;
        }
        return bucketStart <= dimensionValue && dimensionValue < bucketsForDimension[index + 1];
      });
      buckets[bucketIndex] += 1;
    }
  });
  const data = buckets.map((value, index) => {
    return {
      id: `column-${index}`,
      y: value,
    };
  });
  return { data, name };
}

function normalizeSerie(serie: HistogramSerie): HistogramSerie {
  const total = serie.data.reduce((accum, val) => accum + val.y, 0);
  return {
    ...serie,
    data: serie.data.map((val) => ({
      ...val,
      y: Math.round((val.y * 1000) / total) / 10,
    })),
  };
}

export function getHistogramSeries(
  yearData: SurveyData,
  user: User,
  dimension: Dimension
): HistogramSeries {
  if (dimension === "grossSalary") {
    const serie = getHistogramSingleSeries(yearData, "grossSalary");
    return [normalizeSerie(serie)];
  }
  if (dimension === "gender") {
    const genders = ["Female", "Male"];
    return genders.map((gender) => {
      const filteredData = yearData.filter((row) => row.gender === gender);
      const serie = getHistogramSingleSeries(filteredData, gender);
      return normalizeSerie(serie);
    });
  }
  const filteredData = yearData.filter((row) => row[dimension] === user[dimension]);
  return [getHistogramSingleSeries(filteredData, dimension)];
}
