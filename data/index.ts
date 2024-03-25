import data2023 from "@/data/2023.json";
import range from "lodash/range";
import { NumericKeys, BooleanKeys, StringKeys } from "./helpers";

export { data2023 };
export type DataPoint = (typeof data2023)[number];
export type Dimension = keyof DataPoint;
export type NumericDimension = NumericKeys<DataPoint>;
export type BooleanDimension = BooleanKeys<DataPoint>;
export type StringDimension = StringKeys<DataPoint>;
export type AvailableYear = 2023;

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
  yearsInCurrentCompany: "Years in current company",
  yearsInCurrentPosition: "Years in current position",
};

export const units: Record<NumericDimension, string> = {
  grossSalary: "€",
  hoursPerWeek: "hours",
};

export const histogramBuckets: Record<NumericDimension, number[]> = {
  grossSalary: range(0, 210_000, 10_000),
  hoursPerWeek: range(0, 52, 4),
};

export function getStats() {
  const salaries = data2023.map((row) => row.grossSalary);
  return {
    respondants: data2023.length,
    minSalary: Math.min(...salaries)
      .toLocaleString("de")
      .replace(".", " "),
    maxSalary: Math.max(...salaries)
      .toLocaleString("de")
      .replace(".", " "),
  };
}
