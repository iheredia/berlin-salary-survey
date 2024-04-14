import { useContext } from "react";
import AppContext from "@/components/context";
import BaseComment from "../components/base-comment";

export default function RoleComment() {
  const { data, user } = useContext(AppContext);

  let comment;

  if (data.role) {
    const { percentile, averages } = data.role;
    const upperDifference = 100 - percentile;
    let people = "people managers";

    if (user.role === "Individual contributor") {
      people = "individual contributors";
    }

    if (percentile < 50) {
      comment = `${upperDifference}% of ${people} earn more than you.`;
    } else if (percentile < 100) {
      comment = `You earn more than ${percentile}% of ${people}`;
    } else {
      comment = `You earn more than all of the ${people} who took the survey`;
    }
  }

  return <BaseComment hidden={!user.role}>{comment}</BaseComment>;
}
