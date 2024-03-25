import styles from "./salary-input.module.css";

export default function SalaryInput(props: { setUser: CallableFunction }) {
  return (
    <p className={styles.salaryInputContainer}>
      <label>
        <span>
          Your current <strong>gross yearly salary</strong>
        </span>
        <input
          type="number"
          pattern="[0-9]*"
          inputMode="numeric"
          placeholder="12345"
          onChange={(event) => {
            const rawInput = event.currentTarget.value;
            const sanitizedInput = rawInput.replaceAll(",", "").replaceAll(".", "").trim();
            const newSalary = parseInt(sanitizedInput);
            if (newSalary && !isNaN(newSalary) && newSalary > 100) {
              props.setUser({
                grossSalary: newSalary,
              });
            }
          }}
        />
      </label>
    </p>
  );
}
