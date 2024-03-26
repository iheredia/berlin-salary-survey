import Select from "./select";
import SalaryInput from "./salary-input";
import styles from "./index.module.css";
import { User } from "@/data/types";

export default function UserForm(props: { user: User; setUser: CallableFunction }) {
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
        <Select dimension="education" setUser={setUser} />
        <Select dimension="organizationType" setUser={setUser} />
        <Select dimension="industry" setUser={setUser} />
        <Select dimension="role" setUser={setUser} />
      </p>
    </form>
  );
}
