import { useState } from "react";
import Select from "./select";
import SalaryInput from "./salary-input";
import styles from "./index.module.css";

export type User = {
  salary?: number;
  gender?: string;
};

export default function UserForm(props: { user: User; setUser: CallableFunction }) {
  const [showMore, setShowMore] = useState(false);
  const setUser = (newUser: User) => {
    props.setUser({ ...props.user, ...newUser });
  };
  return (
    <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
      <h3>How do you compare?</h3>

      <SalaryInput setUser={setUser} />

      <p className={styles.selectContainer}>
        <Select dimension="age" setUser={setUser} />
        <Select dimension="gender" setUser={setUser} />
        <Select dimension="experience" setUser={setUser} />

        <Select dimension="citizenship" setUser={setUser} />
        <Select dimension="companySize" setUser={setUser} />
        <Select dimension="education" setUser={setUser} />
        <Select dimension="position" setUser={setUser} />
        <Select dimension="organizationType" setUser={setUser} />
        <Select dimension="industry" setUser={setUser} />
        <Select dimension="role" setUser={setUser} />
        <Select dimension="yearsInCurrentCompany" setUser={setUser} />
        <Select dimension="yearsInCurrentPosition" setUser={setUser} />
        <Select dimension="salaryRaise" setUser={setUser} />
        <Select dimension="workingSchedule" setUser={setUser} />
      </p>
    </form>
  );
}
