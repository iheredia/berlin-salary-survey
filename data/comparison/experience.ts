"use server";
import { calculatePercentile } from "../helpers/utils";
import { getYearData } from "../helpers/year-data";
import { AvailableYear, Series } from "../types";

export type ExperienceComparison = {
  series: Series;
  percentile: number;
};

export default async function getExperienceComparison(
  year: AvailableYear,
  userExperience: string,
  userGrossSalary: number
): Promise<ExperienceComparison> {
  const yearData = getYearData(year);
  const experienceValues = ["Less than 1", "1-2", "3-5", "6-10", "11-15", "16-20", "21-30", "30+"];
  let percentile = 0;
  const series = experienceValues.map((experienceValue, index) => {
    const filteredData = yearData.filter((row) => row.experience === experienceValue);
    if (experienceValue === userExperience) {
      percentile = calculatePercentile(filteredData, userGrossSalary);
    }
    const data = filteredData.map((row) => ({ x: index, y: row.grossSalary }));
    return {
      name: experienceValue,
      data,
    };
  });
  return { series, percentile };
}
