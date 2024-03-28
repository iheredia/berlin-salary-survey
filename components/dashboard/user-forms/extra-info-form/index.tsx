import Select from "./select";
import styles from "./index.module.css";
import { User } from "@/data/types";

export default function ExtraInfoForm(props: { user: User; setUser: CallableFunction }) {
  const setUser = (newUser: User) => {
    props.setUser({ ...props.user, ...newUser });
  };
  return (
    <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
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
