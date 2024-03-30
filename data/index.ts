"use server";
import data2023 from "@/data/2023.json";
import { calculatePercentile } from "./percentile";
import { histogramBuckets, getHistogramCategories, getHistogramSeries } from "./histogram";
import { AvailableYear, Dimension, SurveyData, User, UserComparisonData } from "./types";

function getYearData(year: AvailableYear) {
  return data2023;
}

function getDataForDimension(yearData: SurveyData, user: User, dimension: Dimension) {
  if (user[dimension] && user[dimension] !== "Prefer not to say") {
    return {
      [dimension]: {
        percentile: calculatePercentile(yearData, user, dimension),
        histogramBuckets: histogramBuckets.grossSalary,
        histogramCategories: getHistogramCategories("grossSalary"),
        histogramSeries: getHistogramSeries(
          yearData,
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
  const yearData = getYearData(year);
  return {
    ...getDataForDimension(yearData, user, "grossSalary"),
    ...getDataForDimension(yearData, user, "age"),
    ...getDataForDimension(yearData, user, "citizenship"),
    ...getDataForDimension(yearData, user, "education"),
    ...getDataForDimension(yearData, user, "experience"),
    ...getDataForDimension(yearData, user, "gender"),
    ...getDataForDimension(yearData, user, "industry"),
    ...getDataForDimension(yearData, user, "organizationType"),
    ...getDataForDimension(yearData, user, "role"),
  };
}
