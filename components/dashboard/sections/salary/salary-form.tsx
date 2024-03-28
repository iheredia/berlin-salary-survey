import { ChangeEvent, FormEvent, useRef, useState } from "react";
import styles from "./salary-form.module.css";
import { User } from "@/data/types";

type SalaryFormProps = {
  setUser: CallableFunction;
  user: User;
};

export default function SalaryForm(props: SalaryFormProps) {
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
      props.setUser({ grossSalary: parsedSalary });
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateIfThreshold();
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
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
          <button type="submit" className={styles.inputSubmitIcon}>
            GO
          </button>
          <span
            onClick={(event) => {
              event.preventDefault();
              updateIfThreshold();
            }}
          >
            GO
          </span>
        </span>
      </label>
    </form>
  );
}
