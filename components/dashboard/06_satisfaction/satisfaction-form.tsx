import { ChangeEvent, useContext } from "react";
import AppContext from "@/components/context";
import BaseForm, { OptionsContainer } from "../components/base-form";

export default function SatisfactionForm() {
  const { user, setUser, setData } = useContext(AppContext);

  const onSatisfactionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ satisfaction: parseInt(event.currentTarget.value) });
    setData({ satisfaction: null });
  };

  return (
    <BaseForm hasData={!!user.satisfaction}>
      <p>I am satisfied with my current level of compensation</p>
      <OptionsContainer>
        <label>
          <input type="radio" name="satisfaction" value="1" onChange={onSatisfactionChange} />1 -
          Strongly Agree
        </label>
        <label>
          <input type="radio" name="satisfaction" value="2" onChange={onSatisfactionChange} />2 -
          Disagree
        </label>
        <label>
          <input type="radio" name="satisfaction" value="3" onChange={onSatisfactionChange} />3 -
          Neutral
        </label>
        <label>
          <input type="radio" name="satisfaction" value="4" onChange={onSatisfactionChange} />4 -
          Agree
        </label>
        <label>
          <input type="radio" name="satisfaction" value="5" onChange={onSatisfactionChange} />5 -
          Strongly Agree
        </label>
      </OptionsContainer>
    </BaseForm>
  );
}
