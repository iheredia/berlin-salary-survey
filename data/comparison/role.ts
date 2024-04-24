"use server";
import { getSeries } from "../helpers/histogram";
import { getYearData } from "../helpers/year-data";
import { AvailableYear, Series } from "../types";
import {
  calculatePercentile,
  getAverage,
  isIndividualContributor,
  isPeopleManager,
} from "../helpers/utils";

export type RoleComparison = {
  percentile: number;
  histogramSeries: Series;
  averages: {
    peopleManager: number;
    individualContributor: number;
  };
};

export default async function getRoleComparison(
  year: AvailableYear,
  userRole: string,
  userGrossSalary: number
): Promise<RoleComparison> {
  const yearData = getYearData(year);
  const allRolesData = yearData.filter((row) => row.role !== "Prefer not to say");
  const individualContributorData = allRolesData.filter(isIndividualContributor);
  const peopleManagerData = allRolesData.filter(isPeopleManager);
  const userRoleData = isIndividualContributor({ role: userRole })
    ? individualContributorData
    : peopleManagerData;
  return {
    percentile: calculatePercentile(userRoleData, userGrossSalary),
    histogramSeries: [
      getSeries(individualContributorData, "Individual contributor"),
      getSeries(peopleManagerData, "Team Manager / Lead"),
    ],
    averages: {
      peopleManager: getAverage(peopleManagerData),
      individualContributor: getAverage(individualContributorData),
    },
  };
}
