"use server";
import { getSeries } from "../helpers/histogram";
import { getYearData } from "../helpers/year-data";
import { AvailableYear, Series } from "../types";
import { calculatePercentile, getAverage } from "../helpers/utils";

export type GenderComparison = {
  percentile: number;
  histogramSeries: Series;
  averages: {
    male: number;
    female: number;
  };
};

export default async function getGenderComparison(
  year: AvailableYear,
  userGender: string,
  userGrossSalary: number
): Promise<GenderComparison> {
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
