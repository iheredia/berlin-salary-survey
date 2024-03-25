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
  workingSchedule: "Working schedule",
  yearsInCurrentCompany: "Years in current company",
  yearsInCurrentPosition: "Years in current position",
};

export const units: Record<NumericDimension, string> = {
  grossSalary: "€",
  bonus: "€",
  equity: "€",
  hoursPerWeek: "hours",
};

export const histogramBuckets: Record<NumericDimension, number[]> = {
  grossSalary: range(0, 210_000, 10_000),
  bonus: range(0, 100_000, 5_000),
  equity: range(0, 100_000, 5_000),
  hoursPerWeek: range(0, 52, 4),
};

export function getYearData(year: AvailableYear) {
  return data2023;
}

export function calculatePercentile(year: AvailableYear, salary: number) {
  let count = 0;
  const data = getYearData(year);
  data.forEach((row) => {
    const v = row.grossSalary;
    if (v < salary) {
      count++;
    } else if (v == salary) {
      count += 0.5;
    }
  });
  return Math.round((100 * count) / data.length);
}
