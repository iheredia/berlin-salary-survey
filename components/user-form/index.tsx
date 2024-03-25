import AgeSelect from "./ages-select";
import GenderSelect from "./gender-select";
import SalaryInput from "./salary-input";

export type User = {
  salary?: number;
  gender?: string;
};

export default function UserForm(props: { user: User; setUser: CallableFunction }) {
  const setUser = (newUser: User) => props.setUser({ ...props.user, ...newUser });
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <SalaryInput setUser={setUser} />
      <GenderSelect setUser={setUser} />
      <AgeSelect setUser={setUser} />
    </form>
  );
}
