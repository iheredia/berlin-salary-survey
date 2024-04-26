"use server";

import { AvailableYear, User } from "./types";
import getGenderComparison, { GenderComparison } from "./comparison/gender";
import getIndustryComparison, { IndustryComparison } from "./comparison/industry";
import getRoleComparison, { RoleComparison } from "./comparison/role";
import getPositionComparison, { PositionComparison } from "./comparison/position";
import getSatisfactionComparison, { SatisfactionComparison } from "./comparison/satisfaction";
import getExperienceComparison, { ExperienceComparison } from "./comparison/experience";
import getSalaryComparison, { GrossSalaryComparison } from "./comparison/salary";

function sleepSeconds(seconds: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

export type UserComparison = Partial<{
  grossSalary: GrossSalaryComparison;
  gender: GenderComparison;
  industry: IndustryComparison;
  role: RoleComparison;
  position: PositionComparison;
  satisfaction: SatisfactionComparison;
  experience: ExperienceComparison;
}>;

export default async function getData(year: AvailableYear, user: User): Promise<UserComparison> {
  if (process.env.NODE_ENV === "development") {
    await sleepSeconds(Math.random());
  }

  const data: UserComparison = {};

  if (!user.grossSalary) return {};
  data.grossSalary = await getSalaryComparison(year, user.grossSalary);

  if (user.gender) {
    data.gender = await getGenderComparison(year, user.gender, user.grossSalary);
  }

  if (user.industry) {
    data.industry = await getIndustryComparison(year);
  }

  if (user.role) {
    data.role = await getRoleComparison(year, user.role, user.grossSalary);
  }

  if (user.position) {
    data.position = await getPositionComparison(year, user.position);
  }

  if (user.satisfaction) {
    data.satisfaction = await getSatisfactionComparison(year, user.grossSalary);
  }

  if (user.experience) {
    data.experience = await getExperienceComparison(year, user.experience, user.grossSalary);
  }

  return data;
}
