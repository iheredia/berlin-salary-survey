import { AvailableYear, Dimension } from "./types";
import uniqueValues2023 from "./2023-values.json";
import uniqueValues2024 from "./2024-values.json";

export function getValues(year: AvailableYear) {
  if (year === 2024) return uniqueValues2024;
  return uniqueValues2023;
}

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
