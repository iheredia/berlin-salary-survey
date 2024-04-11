import { ChangeEvent, FormEvent, useContext } from "react";
import AppContext from "@/components/context";
import BaseForm, { OptionsContainer } from "../components/base-form";

export default function RoleForm() {
  const { user, setUser } = useContext(AppContext);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onRoleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ role: event.currentTarget.value });
  };

  return (
    <BaseForm onSubmit={onSubmit} hasData={!!user.role}>
      <OptionsContainer>
        <label>
          <input type="radio" name="role" value="Individual contributor" onChange={onRoleChange} />
          Individual contributor
        </label>
        <label>
          <input type="radio" name="role" value="People manager" onChange={onRoleChange} />
          Team Manager / Lead
        </label>
      </OptionsContainer>
    </BaseForm>
  );
}
