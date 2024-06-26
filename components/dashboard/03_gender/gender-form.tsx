import { ChangeEvent, useContext } from "react";
import AppContext from "@/components/context";
import BaseForm, { OptionsContainer } from "../components/base-form";

export default function GenderForm() {
  const { user, setUser, setData } = useContext(AppContext);

  const onGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ gender: event.currentTarget.value });
    setData({ gender: null });
  };

  return (
    <BaseForm hasData={!!user.gender}>
      <OptionsContainer rowMobile>
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
