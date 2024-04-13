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

    let roleComment;
    if (percentile < 50) {
      roleComment = `${upperDifference}% of ${people} earn more than you.`;
    } else if (percentile < 100) {
      roleComment = `You earn more than ${percentile}% of ${people}`;
    } else {
      roleComment = `You earn more than all of the ${people} who took the survey`;
    }
    comment = (
      <>
        <p>{roleComment}</p>
        <p>
          For more gender gap data,{" "}
          <a href="https://handpickedberlin.com/startup-tech-salary-trends-berlin/">
            check our report
          </a>
          .
        </p>
      </>
    );
  }

  return <BaseComment hidden={!user.role}>{comment}</BaseComment>;
}
