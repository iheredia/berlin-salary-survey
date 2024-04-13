import { useContext } from "react";
import { getValues } from "@/data/static-values";
import AppContext from "@/components/context";
import styles from "./select.module.css";
import BaseForm from "../components/base-form";

export default function IndustryForm() {
  const { setUser, user, year, setData } = useContext(AppContext);
  const defaultValue = "Prefer not to say";
  const industryValues = getValues(year).industry.filter((val) => val != defaultValue);
  return (
    <BaseForm hasData={!!user.industry}>
      <select
        className={styles.select}
        defaultValue={defaultValue}
        onChange={(event) => {
          setUser({ industry: event.currentTarget.value });
          setData({ industry: null });
        }}
      >
        {user.industry ? null : <option value={defaultValue}>What is your industry?</option>}
        {industryValues.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </BaseForm>
  );
}
