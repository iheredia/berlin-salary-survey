import data2023 from "@/data/2023.json";
import range from "lodash/range";
import { AvailableYear, Dimension, NumericDimension, User } from "./types";

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

export const histogramBuckets: Record<NumericDimension, number[]> = {
  grossSalary: range(0, 210_000, 10_000),
  bonus: range(0, 100_000, 5_000),
  equity: range(0, 100_000, 5_000),
  hoursPerWeek: range(0, 52, 4),
};

export function getYearData(year: AvailableYear) {
  return data2023;
}

export function calculatePercentile(year: AvailableYear, user: User, dimension: Dimension) {
  let count = 0;
  const data = getYearData(year);
  const filteredData = data.filter((row) => {
    if (dimension && dimension !== "grossSalary") {
      return row[dimension] === user[dimension];
    }
    return true;
  });
  filteredData.forEach((row) => {
    if (user.grossSalary) {
      if (row.grossSalary < user.grossSalary) {
        count++;
      } else if (row.grossSalary == user.grossSalary) {
        count += 0.5;
      }
    }
  });
  console.log({ dimension, value: user[dimension], filteredData });

  return Math.round((100 * count) / filteredData.length);
}
