import { StringDimension } from "@/data";

export default function Select(props: {
  setUser: CallableFunction;
  defaultValue: string;
  values: string[];
  dimension: StringDimension;
}) {
  return (
    <select
      defaultValue={props.defaultValue}
      onChange={(event) => {
        props.setUser({ [props.dimension]: event.currentTarget.value });
      }}
    >
      {props.values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
