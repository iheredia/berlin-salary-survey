import { useContext } from "react";
import { StringDimension } from "@/data/types";
import { names, values } from "@/data/static-values";
import AppContext from "@/components/context";
import styles from "./select.module.css";

const prompts: Record<StringDimension, string> = {
  age: "Select your age range to compare yourself against people of the same age in the survey",
  gender: "Select your gender to compare yourself against people of the same gender in the survey",
  experience:
    "Select how many years of experience you have to compare yourself against people of the same experience in the survey",
  citizenship:
    "Select your citizenship to compare yourself against people of the same citizenship in the survey",
  companySize: "",
  education:
    "Select your education level to compare yourself against people of the same level in the survey",
  industry:
    "Select your industry type to compare yourself against people working in the same area in the survey",
  position: "",
  role: "Select your role type to compare yourself against people working in the same position type in the survey",
  organizationType:
    "Select your organization type to compare yourself against people working in the same area in the survey",
  salaryRaise: "",
  workingSchedule: "",
  yearsInCurrentCompany: "",
  yearsInCurrentPosition: "",
};

export default function Select(props: { dimension: StringDimension }) {
  const { setUser } = useContext(AppContext);
  const defaultValue = "Prefer not to say";
  return (
    <div className={styles.selectContainer}>
      <p>{prompts[props.dimension]}</p>
      <select
        className={styles.select}
        defaultValue={defaultValue}
        onChange={(event) => {
          setUser({ [props.dimension]: event.currentTarget.value });
        }}
      >
        <option value={defaultValue}>{names[props.dimension]}</option>
        {values[props.dimension].map((value) => (
          <option key={value} value={value}>
            {names[props.dimension]}: {value}
          </option>
        ))}
      </select>
    </div>
  );
}
