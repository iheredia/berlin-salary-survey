import { ChangeEvent, FormEvent, useContext } from "react";
import AppContext from "@/components/context";
import BaseForm, { OptionsContainer } from "../components/base-form";
import styles from "./gender-form.module.css";

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
      <OptionsContainer>
        <label>
          <input type="radio" name="gender" value="Female" onChange={onGenderChange} />
          Female
        </label>
        <label>
          <input type="radio" name="gender" value="Male" onChange={onGenderChange} />
          Male
        </label>
      </OptionsContainer>
    </BaseForm>
  );
}
