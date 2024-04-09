import { ChangeEvent, FormEvent, useContext } from "react";
import styles from "./gender-form.module.css";
import AppContext from "@/components/context";
import BaseForm from "../components/base-form";

export default function GenderForm() {
  const { user, setUser } = useContext(AppContext);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ gender: event.currentTarget.value });
  };

  return (
    <BaseForm onSubmit={onSubmit} hasData={!!user.gender}>
      <div>Do you identify yourself as ?</div>
      <div className={styles.optionsContainer}>
        <label>
          <input type="radio" name="gender" value="Female" onChange={onGenderChange} />
          Female
        </label>
        <label>
          <input type="radio" name="gender" value="Male" onChange={onGenderChange} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="Non-Binary" onChange={onGenderChange} />
          Non-Binary
        </label>
      </div>
    </BaseForm>
  );
}
