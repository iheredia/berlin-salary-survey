import { ChangeEvent, useContext } from "react";
import AppContext from "@/components/context";
import BaseForm, { OptionsContainer } from "../components/base-form";

export default function ExperienceForm() {
  const { user, setUser, setData } = useContext(AppContext);

  const onExperienceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ experience: event.currentTarget.value });
    setData({ experience: null });
  };

  return (
    <BaseForm hasData={!!user.experience}>
      <p>How many years of experience do you have?</p>
      <OptionsContainer rowMobile>
        <label>
          <input type="radio" name="experience" value="Less than 1" onChange={onExperienceChange} />
          Less than 1
        </label>
        <label>
          <input type="radio" name="experience" value="1-2" onChange={onExperienceChange} />
          1-2
        </label>
        <label>
          <input type="radio" name="experience" value="3-5" onChange={onExperienceChange} />
          3-5
        </label>
        <label>
          <input type="radio" name="experience" value="6-10" onChange={onExperienceChange} />
          6-10
        </label>
        <label>
          <input type="radio" name="experience" value="11-15" onChange={onExperienceChange} />
          11-15
        </label>
        <label>
          <input type="radio" name="experience" value="16-20" onChange={onExperienceChange} />
          16-20
        </label>
        <label>
          <input type="radio" name="experience" value="21-30" onChange={onExperienceChange} />
          21-30
        </label>
        <label>
          <input type="radio" name="experience" value="30+" onChange={onExperienceChange} />
          30+
        </label>
      </OptionsContainer>
    </BaseForm>
  );
}
