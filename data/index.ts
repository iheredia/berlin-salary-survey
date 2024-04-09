"use server";
import data2023 from "@/data/2023.json";
import { calculatePercentile } from "./percentile";
import { histogramBuckets, getHistogramCategories, getHistogramSeries } from "./histogram";
import { AvailableYear, SurveyData, User, UserComparisonData } from "./types";
import { getAverage } from "./averages";
import { values } from "./static-values";

function getYearData(year: AvailableYear) {
  return data2023;
}

function getGrossSalaryData(yearData: SurveyData, user: User) {
  return {
    percentile: calculatePercentile(yearData, user, "grossSalary"),
    histogramBuckets: histogramBuckets.grossSalary,
    histogramCategories: getHistogramCategories("grossSalary"),
    histogramSeries: getHistogramSeries(yearData, user, "grossSalary"),
  };
}

function getGenderData(yearData: SurveyData, user: User) {
  return {
    percentile: calculatePercentile(yearData, user, "gender"),
    histogramBuckets: histogramBuckets.grossSalary,
    histogramCategories: getHistogramCategories("grossSalary"),
    histogramSeries: getHistogramSeries(yearData, user, "gender"),
    averages: {
      male: getAverage(yearData, "gender", "Male"),
      female: getAverage(yearData, "gender", "Female"),
    },
  };
}

function getIndustryData(yearData: SurveyData, user: User) {
  const averages: Record<string, number> = {};
  values.industry
    .filter((industry) => industry !== "Prefer not to say")
    .forEach((industry) => {
      averages[industry] = getAverage(yearData, "industry", industry);
    });
  return { averages };
}

export default async function getData(
  year: AvailableYear,
  user: User
): Promise<UserComparisonData> {
  const yearData = getYearData(year);
  const data: UserComparisonData = {};

  if (user.grossSalary) {
    data.grossSalary = getGrossSalaryData(yearData, user);
  }
  if (user.gender) {
    data.gender = getGenderData(yearData, user);
  }
  if (user.industry) {
    data.industry = getIndustryData(yearData, user);
  }
  return data;
}
