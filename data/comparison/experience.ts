"use server";
import { getYearData } from "../helpers/year-data";
import { AvailableYear, UserExperienceComparisonData } from "../types";

export default async function getExperienceComparisonData(
  year: AvailableYear
): Promise<UserExperienceComparisonData> {
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
