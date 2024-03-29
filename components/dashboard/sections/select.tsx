import { StringDimension } from "@/data/types";
import { names, values } from "@/data/static-values";

export default function Select(props: { setUser: CallableFunction; dimension: StringDimension }) {
  const defaultValue = "Prefer not to say";
  return (
    <select
      defaultValue={defaultValue}
      onChange={(event) => {
        props.setUser({ [props.dimension]: event.currentTarget.value });
      }}
    >
      <option value={defaultValue}>{names[props.dimension]}</option>
      {values[props.dimension].map((value) => (
        <option key={value} value={value}>
          {names[props.dimension]}: {value}
        </option>
      ))}
    </select>
  );
}
