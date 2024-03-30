import { StringDimension } from "@/data/types";
import { names, values } from "@/data/static-values";
import { useContext } from "react";
import AppContext from "@/components/context";

export default function Select(props: { dimension: StringDimension }) {
  const { setUser } = useContext(AppContext);
  const defaultValue = "Prefer not to say";
  return (
    <select
      defaultValue={defaultValue}
      onChange={(event) => {
        setUser({ [props.dimension]: event.currentTarget.value });
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
