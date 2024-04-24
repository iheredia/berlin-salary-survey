"use server";
import { getSeries } from "../helpers/histogram";
import { getYearData } from "../helpers/year-data";
import { AvailableYear, UserGenderComparisonData } from "../types";
import { calculatePercentile, getAverage } from "../helpers/utils";

export default async function getGenderComparisonData(
  year: AvailableYear,
  userGender: string,
  userGrossSalary: number
): Promise<UserGenderComparisonData> {
  const yearData = getYearData(year);
  const userGenderSalaries = yearData.filter((row) => row.gender === userGender);
  const maleSalaries = yearData.filter((row) => row.gender === "Male");
  const femaleSalaries = yearData.filter((row) => row.gender === "Female");
  return {
    percentile: calculatePercentile(userGenderSalaries, userGrossSalary),
    histogramSeries: [getSeries(femaleSalaries, "Female"), getSeries(maleSalaries, "Male")],
    averages: {
      male: getAverage(maleSalaries),
      female: getAverage(femaleSalaries),
    },
  };
}
