import { useContext } from "react";
import { names, values } from "@/data/static-values";
import AppContext from "@/components/context";
import styles from "./select.module.css";
import BaseForm from "../components/base-form";

export default function IndustryForm() {
  const { setUser, user } = useContext(AppContext);
  const defaultValue = "Prefer not to say";
  const industryValues = values.industry.filter((val) => val != defaultValue);
  return (
    <BaseForm hasData={!!user.industry}>
      <p>In which industry are you working?</p>
      <select
        className={styles.select}
        defaultValue={defaultValue}
        onChange={(event) => {
          setUser({ industry: event.currentTarget.value });
        }}
      >
        {user.industry ? null : <option value={defaultValue}>{names.industry}</option>}
        {industryValues.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </BaseForm>
  );
}
