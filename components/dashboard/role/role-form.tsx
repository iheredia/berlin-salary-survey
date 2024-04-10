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
      <div>Are you an individual contributor or do you have people on charge ?</div>
      <OptionsContainer>
        <label>
          <input type="radio" name="role" value="Individual contributor" onChange={onRoleChange} />
          Individual contributor
        </label>
        <label>
          <input type="radio" name="role" value="People manager" onChange={onRoleChange} />
          People manager / lead
        </label>
      </OptionsContainer>
    </BaseForm>
  );
}
