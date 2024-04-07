import { ChangeEvent, FormEvent, useContext, useState } from "react";
import styles from "./salary-form.module.css";
import classNames from "classnames";
import AppContext from "@/components/context";

export default function SalaryForm() {
  const { user, setUser } = useContext(AppContext);
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
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateIfThreshold();
  };

  const formClassName = classNames(styles.form, user.grossSalary ? styles.formWithSalary : "");
  const buttonClassName = classNames(
    styles.inputSubmitIcon,
    parsedSalary > 10_000 ? styles.inputSubmitIconActive : ""
  );
  return (
    <form className={formClassName} onSubmit={onSubmit}>
      <label className={styles.label}>
        <span className={styles.labelText}>Your current gross annual salary</span>
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
      </label>
    </form>
  );
}
