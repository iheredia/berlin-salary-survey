"use server";
import { getYearData } from "../helpers/year-data";
import { AvailableYear, Series } from "../types";

export type ExperienceComparison = {
  series: Series;
};

export default async function getExperienceComparison(
  year: AvailableYear
): Promise<ExperienceComparison> {
  const yearData = getYearData(year);
  const experienceValues = ["Less than 1", "1-2", "3-5", "6-10", "11-15", "16-20", "21-30", "30+"];
  return {
    series: experienceValues.map((experienceValue, index) => {
      const data = yearData
        .filter((row) => row.experience === experienceValue)
        .map((row) => ({ x: index, y: row.grossSalary }));
      return {
        name: experienceValue,
        data,
      };
    }),
  };
}
