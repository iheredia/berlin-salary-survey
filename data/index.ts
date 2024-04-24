"use server";

import { AvailableYear, User, UserComparisonData } from "./types";
import getGenderComparisonData from "./comparison/gender";
import getIndustryComparisonData from "./comparison/industry";
import getRoleComparisonData from "./comparison/role";
import getPositionComparisonData from "./comparison/position";
import getSatisfactionComparisonData from "./comparison/satisfaction";
import getExperienceComparisonData from "./comparison/experience";
import getSalaryComparisonData from "./comparison/salary";

function sleepSeconds(seconds: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

export default async function getData(
  year: AvailableYear,
  user: User
): Promise<UserComparisonData> {
  if (process.env.NODE_ENV === "development") {
    await sleepSeconds(Math.random());
  }

  const data: UserComparisonData = {};

  if (!user.grossSalary) return {};
  data.grossSalary = await getSalaryComparisonData(year, user.grossSalary);

  if (user.gender) {
    data.gender = await getGenderComparisonData(year, user.gender, user.grossSalary);
  }

  if (user.industry) {
    data.industry = await getIndustryComparisonData(year);
  }

  if (user.role) {
    data.role = await getRoleComparisonData(year, user.role, user.grossSalary);
  }

  if (user.position) {
    data.position = await getPositionComparisonData(year, user.position);
  }

  if (user.satisfaction) {
    data.satisfaction = await getSatisfactionComparisonData(year);
  }

  if (user.experience) {
    data.experience = await getExperienceComparisonData(year);
  }

  return data;
}
