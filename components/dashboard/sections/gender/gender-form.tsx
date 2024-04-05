import { ChangeEvent, FormEvent, useContext, useState } from "react";
import styles from "./gender-form.module.css";
import classNames from "classnames";
import AppContext from "@/components/context";

export default function GenderForm() {
  const { user, setUser } = useContext(AppContext);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const formClassName = classNames(styles.form, user.gender ? styles.formWithGender : "");

  const onGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ gender: event.currentTarget.value });
  };

  return (
    <form className={formClassName} onSubmit={onSubmit}>
      <p>Do you identify yourself as ?</p>
      <label>
        <input type="radio" name="gender" value="Female" onChange={(event) => {}} />
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
    </form>
  );
}
