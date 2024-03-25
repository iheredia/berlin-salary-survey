import Select from "./select";
import SalaryInput from "./salary-input";

export type User = {
  salary?: number;
  gender?: string;
};

export default function UserForm(props: { user: User; setUser: CallableFunction }) {
  const setUser = (newUser: User) => {
    console.log({ oldUser: props.user, newUser });
    props.setUser({ ...props.user, ...newUser });
  };
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <SalaryInput setUser={setUser} />

      <Select dimension="age" setUser={setUser} />
      <Select dimension="gender" setUser={setUser} />
      <Select dimension="citizenship" setUser={setUser} />
      <Select dimension="companySize" setUser={setUser} />
      <Select dimension="education" setUser={setUser} />
      <Select dimension="experience" setUser={setUser} />
      <Select dimension="bonus" setUser={setUser} />
      <Select dimension="equity" setUser={setUser} />
      <Select dimension="position" setUser={setUser} />
      <Select dimension="organizationType" setUser={setUser} />
      <Select dimension="industry" setUser={setUser} />
      <Select dimension="role" setUser={setUser} />
      <Select dimension="yearsInCurrentCompany" setUser={setUser} />
      <Select dimension="yearsInCurrentPosition" setUser={setUser} />
      <Select dimension="salaryRaise" setUser={setUser} />
      <Select dimension="workingSchedule" setUser={setUser} />
    </form>
  );
}
