"use server";
import data2023 from "@/data/2023.json";
import { calculatePercentile } from "./percentile";
import { histogramBuckets, getHistogramCategories, getHistogramSeries } from "./histogram";
import { AvailableYear, Dimension, SurveyData, User, UserComparisonData } from "./types";

function getYearData(year: AvailableYear) {
  return data2023;
}

function getDataForDimension(yearData: SurveyData, user: User, dimension: Dimension) {
  return {
    percentile: calculatePercentile(yearData, user, dimension),
    histogramBuckets: histogramBuckets.grossSalary,
    histogramCategories: getHistogramCategories("grossSalary"),
    histogramSeries: getHistogramSeries(
      yearData,
      "grossSalary",
      user,
      dimension !== "grossSalary" ? dimension : undefined
    ),
  };
}

export default async function getData(
  year: AvailableYear,
  user: User
): Promise<UserComparisonData> {
  const yearData = getYearData(year);
  const data: UserComparisonData = {};

  let key: Dimension;
  for (key in user) {
    if (key) {
      data[key] = getDataForDimension(yearData, user, key);
    }
  }
  return data;
}
