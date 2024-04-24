"use server";
import { getYearData } from "../helpers/year-data";
import { AvailableYear, SurveyData } from "../types";

export type SatisfactionComparison = {
  all: number[];
  male: number[];
  female: number[];
};

export default async function getSatisfactionComparison(
  year: AvailableYear
): Promise<SatisfactionComparison> {
  const yearData = getYearData(year);
  const getSatisfaction = (data: SurveyData) =>
    [1, 2, 3, 4, 5].map(
      (score) => data.filter((row) => row.satisfaction === score).length / data.length
    );
  const maleData = yearData.filter((row) => row.gender === "Male");
  const femaleData = yearData.filter((row) => row.gender === "Female");
  return {
    all: getSatisfaction(yearData),
    male: getSatisfaction(maleData),
    female: getSatisfaction(femaleData),
  };
}
