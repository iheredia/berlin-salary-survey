"use server";
import { getSeries } from "../helpers/histogram";
import { getYearData } from "../helpers/year-data";
import { AvailableYear, Series, SurveyData } from "../types";

export type SatisfactionComparison = {
  all: number[];
  male: number[];
  female: number[];
  sameSalary: number[];
  histogramSeries: Series;
};

export default async function getSatisfactionComparison(
  year: AvailableYear,
  userGrossSalary: number
): Promise<SatisfactionComparison> {
  const yearData = getYearData(year);
  const getSatisfaction = (data: SurveyData) =>
    [1, 2, 3, 4, 5].map(
      (score) => data.filter((row) => row.satisfaction === score).length / data.length
    );
  const maleData = yearData.filter((row) => row.gender === "Male");
  const femaleData = yearData.filter((row) => row.gender === "Female");
  const sameSalaryData = yearData.filter(
    (row) => Math.abs(1 - row.grossSalary / userGrossSalary) <= 0.1
  );
  return {
    all: getSatisfaction(yearData),
    male: getSatisfaction(maleData),
    female: getSatisfaction(femaleData),
    sameSalary: getSatisfaction(sameSalaryData),
    histogramSeries: [5, 4, 3, 2, 1].map((satisfactionLevel) => {
      const satisfactionData = yearData.filter((row) => row.satisfaction === satisfactionLevel);
      return getSeries(satisfactionData, `${satisfactionLevel}`, yearData.length);
    }),
  };
}
