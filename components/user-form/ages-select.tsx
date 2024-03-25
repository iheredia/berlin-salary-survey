import Select from "./select";

const AGES = [
  "24 or under",
  "25-29",
  "30-34",
  "35-39",
  "40-44",
  "45-49",
  "50-54",
  "55-59",
  "60 and over",
  "Prefer not to say",
];
const DEFAULT_AGE = AGES[9];

export default function AgeSelect(props: { setUser: CallableFunction }) {
  return (
    <p>
      <label>Age</label>
      <Select dimension="age" setUser={props.setUser} values={AGES} defaultValue={DEFAULT_AGE} />
    </p>
  );
}
