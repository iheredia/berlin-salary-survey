import { useContext } from "react";
import AppContext from "@/components/context";
import BaseComment, { Strong } from "../components/base-comment";

export default function RoleComment() {
  const { data, user } = useContext(AppContext);
  if (!data.role) return;

  const { percentile, averages } = data.role;
  const upperDifference = 100 - percentile;
  let comment;
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

  return (
    <BaseComment>
      <p>{comment}</p>
      <p>
        For more gender gap data,{" "}
        <a href="https://handpickedberlin.com/startup-tech-salary-trends-berlin/">
          check our report
        </a>
        .
      </p>
    </BaseComment>
  );
}
