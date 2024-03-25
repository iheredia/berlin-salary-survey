import { StringDimension, names } from "@/data";

const values: Record<StringDimension, string[]> = {
  age: [
    "24 or under",
    "25-29",
    "30-34",
    "35-39",
    "40-44",
    "45-49",
    "50-54",
    "55-59",
    "60 and over",
  ],
  citizenship: ["German", "Other-EU", "Non-EU", "Dual (GER/EU and EU)", "Dual (GER/EU and Non-EU)"],
  companySize: ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"],
  education: [
    "Apprenticeship/Vocational Training (Dual System)",
    "Trade and Technical School Certificate",
    "Specialized and Engineering School Certificate (GDR)",
    "Bachelor's Degree",
    "Master's Degree",
    "Diploma",
    "Doctor's Degree",
    "No vocational qualification attained",
  ],
  experience: ["Less than 1", "1-2", "3-5", "6-10", "11-15", "16-20", "21-30", "30+"],
  gender: ["Female", "Male", "Non-Binary"],
  industry: [
    "Agriculture & Forestry",
    "Construction",
    "Education",
    "Finance & Insurance",
    "Healthcare and Pharmaceuticals",
    "Hospitality (Accommodation and Food Services)",
    "Information & Communication",
    "Manufacturing",
    "Mining & Quarrying",
    "Professional Services (e.g., consulting, engineering, and legal services)",
    "Public Administration",
    "Technology/Software Development",
    "Transportation & Storage",
    "Real Estate",
    "Retail & Wholesale Trade",
    "Utilities (Electricity, Gas, Steam, Air Conditioning Supply)",
    "Other Services",
  ],
  organizationType: [
    "A private firm",
    "A state-owned enterprise",
    "Central or local government",
    "Self-employed",
    "A Non-governmental organization (NGO)",
    "Other public sector (such as education and health)",
    "Other",
  ],
  position: [
    "Entry Level / Junior",
    "Mid-Level / Intermediate",
    "Senior",
    "Lead / Principal",
    "Staff / Specialist",
    "Architect / High-Level Expert",
    "Not an individual contributor",
  ],
  role: [
    "Working student / Intern",
    "Individual Contributor / Employee (no direct reports)",
    "Team Lead (manages small team)",
    "Senior Manager/Director (manages departments)",
    "Manager (manages team)",
    "Executive (executive leadership)",
    "Freelance / Contractor",
  ],
  salaryRaise: ["No raise", "1-5%", "6-10%", "11-15%", "16-20%", "20%+"],
  workingSchedule: ["Full-time", "Part-time", "Contract/Freelance"],
  yearsInCurrentCompany: ["Less than 1", "1-2", "3-5", "6-10", "11-15", "16-20", "21-30", "30+"],
  yearsInCurrentPosition: ["Less than 1", "1-2", "3-5", "6-10", "11-15", "16-20"],

  equity: [],
  bonus: [],

  // satisfaction: [["1", "5", "2", "4", "3"]],
  // startup: ["Yes", "No", "I'm self-employed", "I don't know"],
  // overtime: ["No", "Yes, additional time off (flex-time)", "Yes, paid", "Prefer not to say", "Self-employed" ]
};

export default function Select(props: { setUser: CallableFunction; dimension: StringDimension }) {
  const defaultValue = "Prefer not to say";
  return (
    <p>
      <label>{names[props.dimension]}</label>
      <select
        defaultValue={defaultValue}
        onChange={(event) => {
          props.setUser({ [props.dimension]: event.currentTarget.value });
        }}
      >
        {values[props.dimension].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
        <option value={defaultValue}>{defaultValue}</option>
      </select>
    </p>
  );
}