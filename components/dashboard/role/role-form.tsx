import { ChangeEvent, FormEvent, useContext } from "react";
import AppContext from "@/components/context";
import BaseForm, { OptionsContainer } from "../components/base-form";

export default function RoleForm() {
  const { user, setUser, setData } = useContext(AppContext);

  const onRoleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ role: event.currentTarget.value });
    setData({ role: null });
  };

  return (
    <BaseForm hasData={!!user.role}>
      <OptionsContainer>
        <label>
          <input type="radio" name="role" value="Individual contributor" onChange={onRoleChange} />
          Individual contributor
        </label>
        <label>
          <input type="radio" name="role" value="Team Manager / Lead" onChange={onRoleChange} />
          Team Manager / Lead
        </label>
      </OptionsContainer>
    </BaseForm>
  );
}
