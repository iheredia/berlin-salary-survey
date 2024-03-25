import { StringDimension, names } from "@/data";
import values from "@/data/values";

export default function Select(props: { setUser: CallableFunction; dimension: StringDimension }) {
  const defaultValue = "Prefer not to say";
  return (
    <p>
      <label>
        {names[props.dimension]}
        <select
          defaultValue={defaultValue}
          onChange={(event) => {
            props.setUser({ [props.dimension]: event.currentTarget.value });
          }}
        >
          <option value={defaultValue}>{defaultValue}</option>
          {values[props.dimension].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
    </p>
  );
}
