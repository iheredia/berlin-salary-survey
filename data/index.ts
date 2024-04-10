"use server";
import data2023 from "@/data/2023.json";
import { calculatePercentile, getAverage } from "./utils";
import { histogramCategories, getSeries, histogramBuckets } from "./histogram";
import { AvailableYear, User, UserComparisonData } from "./types";
import { values } from "./static-values";

function getYearData(year: AvailableYear) {
  return data2023;
}

export default async function getData(
  year: AvailableYear,
  user: User
): Promise<UserComparisonData> {
  const yearData = getYearData(year);
  const data: UserComparisonData = {};

  if (!user.grossSalary) return {};

  data.grossSalary = {
    percentile: calculatePercentile(yearData, user.grossSalary),
    histogramCategories,
    histogramBuckets,
    histogramSeries: [getSeries(yearData, "grossSalary")],
  };

  if (user.gender) {
    const genderSalaries = yearData.filter((row) => row.gender === user.gender);
    const maleSalaries = yearData.filter((row) => row.gender === "Male");
    const femaleSalaries = yearData.filter((row) => row.gender === "Female");
    data.gender = {
      percentile: calculatePercentile(genderSalaries, user.grossSalary),
      histogramSeries: [getSeries(femaleSalaries, "Female"), getSeries(maleSalaries, "Male")],
      averages: {
        male: getAverage(maleSalaries),
        female: getAverage(femaleSalaries),
      },
    };
  }

  if (user.industry) {
    const averages: Record<string, number> = {};
    const industries = values.industry.filter((industry) => industry !== "Prefer not to say");
    industries.forEach((industry) => {
      const industryData = yearData.filter((row) => row.industry === industry);
      averages[industry] = getAverage(industryData);
    });
    data.industry = { averages };
  }
  return data;
}
