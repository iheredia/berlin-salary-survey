import { useContext } from "react";
import AppContext from "@/components/context";
import BaseComment, { Nowrap, Strong } from "../components/base-comment";

export default function PositionComment() {
  const { data, user } = useContext(AppContext);

  let comment;
  if (data.position) {
    comment = (
      <p>
        The average annual gross salary for a {data.position.average.name} is{" "}
        <Strong>€ {data.position.average.value.toLocaleString()}</Strong>{" "}
        <Nowrap>(n: {data.position.average.count})</Nowrap>
      </p>
    );

    if (data.position.familyAverage)
      comment = (
        <>
          {comment}
          <p>
            The average annual gross salary for all {data.position.familyAverage.name} is{" "}
            <Strong>€ {data.position.familyAverage.value.toLocaleString()}</Strong>{" "}
            <Nowrap>(n: {data.position.familyAverage.count})</Nowrap>
          </p>
        </>
      );
  }
  return <BaseComment hidden={!user.position}>{comment}</BaseComment>;
}
