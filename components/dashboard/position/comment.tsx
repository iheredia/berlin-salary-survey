import { useContext } from "react";
import AppContext from "@/components/context";
import BaseComment, { Strong } from "../components/base-comment";

export default function PositionComment() {
  const { data, user } = useContext(AppContext);
  if (!data.position || !user.position) return;

  return (
    <BaseComment>
      The average gross salary for {data.position.average.name} is{" "}
      <Strong>€ {data.position.average.value.toLocaleString()}</Strong>
    </BaseComment>
  );
}
