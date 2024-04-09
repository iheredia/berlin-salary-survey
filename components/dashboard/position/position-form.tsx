import { useContext } from "react";
import { values } from "@/data/static-values";
import AppContext from "@/components/context";
import BaseForm from "../components/base-form";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

type Item = {
  id: string;
  name: string;
};

export default function PositionForm() {
  const { setUser, user } = useContext(AppContext);
  const defaultValue = "Prefer not to say";
  const positionValues = values.position
    .filter((val) => val != defaultValue)
    .map((position) => ({
      name: position,
      id: position,
    }));

  const handleOnSelect = (item: Item) => {
    setUser({ position: item.id });
  };

  return (
    <BaseForm hasData={!!user.position}>
      <p>Which is your current job position?</p>
      <div style={{ width: "300px", maxWidth: "100%" }}>
        <ReactSearchAutocomplete<Item>
          items={positionValues}
          onSelect={handleOnSelect}
          styling={{
            borderRadius: "6px",
            boxShadow: "none",
            backgroundColor: "#f5f5f5",
            border: "solid 1px #c0c0c0",
          }}
        />
      </div>
    </BaseForm>
  );
}
