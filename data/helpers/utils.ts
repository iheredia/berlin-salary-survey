import { SurveyData, User } from "../types";

export function getAverage(filteredYearData: SurveyData) {
  const average =
    filteredYearData.reduce((accum, row) => accum + row.grossSalary, 0) / filteredYearData.length;
  return Math.round(average);
}

export function calculatePercentile(filteredYearData: SurveyData, userGrossSalary: number) {
  let count = 0;

  filteredYearData.forEach((row) => {
    if (row.grossSalary < userGrossSalary) {
      count++;
    } else if (row.grossSalary == userGrossSalary) {
      count += 0.5;
    }
  });

  return Math.round((100 * count) / filteredYearData.length);
}

export function isIndividualContributor(row: User) {
  return (
    row.role !== "Prefer not to say" && row.role?.toLowerCase().includes("individual contributor")
  );
}

export function isPeopleManager(row: User) {
  return (
    row.role !== "Prefer not to say" && !row.role?.toLowerCase().includes("individual contributor")
  );
}
