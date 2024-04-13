import { useContext } from "react";
import AppContext from "@/components/context";
import BaseComment, { Strong } from "../components/base-comment";

export default function PositionComment() {
  const { data, user } = useContext(AppContext);

  let comment;
  if (data.position) {
    comment = (
      <>
        The average gross salary for {data.position.average.name} is{" "}
        <Strong>€ {data.position.average.value.toLocaleString()}</Strong>
      </>
    );
  }
  return <BaseComment hidden={!user.position}>{comment}</BaseComment>;
}
