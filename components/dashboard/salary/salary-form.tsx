import { ChangeEvent, FormEvent, useContext, useState } from "react";
import styles from "./salary-form.module.css";
import classNames from "classnames";
import AppContext from "@/components/context";
import BaseForm from "../components/base-form";

export default function SalaryForm() {
  const { user, setUser, setData } = useContext(AppContext);
  const [parsedSalary, setParsedSalary] = useState(0);

  const onSalaryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rawInput = event.currentTarget.value;
    const sanitizedInput = rawInput.replaceAll(/\D/g, "");
    const newSalary = parseInt(sanitizedInput);
    if (newSalary && !isNaN(newSalary)) {
      setParsedSalary(newSalary);
    }
  };

  const updateIfThreshold = () => {
    if (parsedSalary > 10_000) {
      setUser({ grossSalary: parsedSalary });
      setData({ grossSalary: null });
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    updateIfThreshold();
  };

  const buttonClassName = classNames(
    styles.inputSubmitIcon,
    parsedSalary > 10_000 ? styles.inputSubmitIconActive : ""
  );
  return (
    <BaseForm onSubmit={onSubmit} hasData={!!user.grossSalary}>
      <label className={styles.label}>
        <span className={styles.labelText}>What is your Total Annual Gross Salary?*</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.input}
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            placeholder="65 432"
            onChange={onSalaryChange}
          />
          <button type="submit" className={buttonClassName}>
            Compare
          </button>
        </span>
        <p className={styles.disclaimer}>
          *Without bonus or equity. <br /> We do not keep your data.
        </p>
      </label>
    </BaseForm>
  );
}
