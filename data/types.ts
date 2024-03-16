import data2023 from "@/data/2023.json";

export type DataPoint = (typeof data2023)[number];
export type Dimension = keyof DataPoint;

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

export const units: Record<Dimension, string> = {
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
  workingRemotelyForBerlin: "",

  age: "years",
  bonus: "€",
  companySize: "employees",
  experience: "years",
  equity: "€",
  grossSalary: "€",
  salaryRaise: "%",
  hoursPerWeek: "hours",
  yearsInCurrentCompany: "years",
  yearsInCurrentPosition: "years",
};
