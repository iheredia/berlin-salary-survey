import { Dimension, StringDimension } from "./types";
import uniqueValues from "./2023-values.json";

export const values: Record<StringDimension, string[]> = uniqueValues;

export const names: Record<Dimension, string> = {
  age: "Age",
  bonus: "Bonus",
  citizenship: "Citizenship",
  companySize: "Company size",
  education: "Education",
  equity: "Equity",
  experience: "Experience",
  gender: "Gender",
  grossSalary: "Gross salary",
  hoursPerWeek: "Hours per week",
  inBerlin: "In berlin",
  industry: "Industry",
  isFreelance: "Freelancer",
  isFullTime: "Full time",
  isPartTime: "Part time",
  organizationType: "Organization type",
  position: "Position",
  role: "Role",
  salaryRaise: "Salary raise",
  workingRemotelyForBerlin: "Working remotely for berlin",
  workingSchedule: "Working schedule",
  yearsInCurrentCompany: "Years in current company",
  yearsInCurrentPosition: "Years in current position",
};

export const units: Record<Dimension, string> = {
  grossSalary: "€",
  bonus: "€",
  equity: "€",
  hoursPerWeek: "hours",
  age: "years",
  yearsInCurrentCompany: "years",
  yearsInCurrentPosition: "years",
  companySize: "employees",
  experience: "years",

  citizenship: "",
  education: "",
  gender: "",
  inBerlin: "",
  industry: "",
  isFreelance: "",
  isFullTime: "",
  isPartTime: "",
  organizationType: "",
  position: "",
  role: "",
  salaryRaise: "",
  workingRemotelyForBerlin: "",
  workingSchedule: "",
};
