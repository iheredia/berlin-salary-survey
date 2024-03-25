import Select from "./select";

const GENDERS = ["Female", "Male", "Non-Binary", "Prefer not to say"];
const DEFAULT_GENDER = GENDERS[3];

export default function GenderSelect(props: { setUser: CallableFunction }) {
  return (
    <p>
      <label>Gender</label>
      <Select
        dimension="gender"
        setUser={props.setUser}
        values={GENDERS}
        defaultValue={DEFAULT_GENDER}
      />
    </p>
  );
}
