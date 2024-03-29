"use server";
import data2023 from "@/data/2023.json";
import range from "lodash/range";
import { AvailableYear, Dimension, NumericDimension, User, UserComparisonData } from "./types";

function getYearData(year: AvailableYear) {
  return data2023;
}

function calculatePercentile(year: AvailableYear, user: User, dimension: Dimension) {
  let count = 0;
  const data = getYearData(year);
  const filteredData = data.filter((row) => {
    if (dimension && dimension !== "grossSalary") {
      return row[dimension] === user[dimension];
    }
    return true;
  });
  filteredData.forEach((row) => {
    if (user.grossSalary) {
      if (row.grossSalary < user.grossSalary) {
        count++;
      } else if (row.grossSalary == user.grossSalary) {
        count += 0.5;
      }
    }
  });

  return Math.round((100 * count) / filteredData.length);
}

const histogramBuckets: Record<NumericDimension, number[]> = {
  grossSalary: range(0, 210_000, 10_000),
  bonus: range(0, 100_000, 5_000),
  equity: range(0, 100_000, 5_000),
  hoursPerWeek: range(0, 52, 4),
};

function getHistogramCategories(year: AvailableYear, dimension: NumericDimension) {
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

function getHistogramSeries(
  year: AvailableYear,
  dimension: NumericDimension,
  user: User,
  filterDimension?: Dimension
) {
  const bucketsForDimension = histogramBuckets[dimension];
  const data = bucketsForDimension.map(() => 0);
  const filteredData = getYearData(year).filter((dataPoint) => {
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

function getDataForDimension(year: AvailableYear, user: User, dimension: Dimension) {
  if (user[dimension] && user[dimension] !== "Prefer not to say") {
    return {
      [dimension]: {
        percentile: calculatePercentile(year, user, dimension),
        histogramBuckets: histogramBuckets.grossSalary,
        histogramCategories: getHistogramCategories(year, "grossSalary"),
        histogramSeries: getHistogramSeries(
          year,
          "grossSalary",
          user,
          dimension !== "grossSalary" ? dimension : undefined
        ),
      },
    };
  }
  return null;
}

export default async function getData(
  year: AvailableYear,
  user: User
): Promise<UserComparisonData> {
  return {
    ...getDataForDimension(year, user, "grossSalary"),
    ...getDataForDimension(year, user, "age"),
    ...getDataForDimension(year, user, "citizenship"),
    ...getDataForDimension(year, user, "education"),
    ...getDataForDimension(year, user, "experience"),
    ...getDataForDimension(year, user, "gender"),
    ...getDataForDimension(year, user, "industry"),
    ...getDataForDimension(year, user, "organizationType"),
    ...getDataForDimension(year, user, "role"),
  };
}
