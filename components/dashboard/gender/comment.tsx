import { useContext } from "react";
import AppContext from "@/components/context";
import BaseComment, { Strong } from "../components/base-comment";

export default function GenderComment() {
  const { user, data } = useContext(AppContext);
  if (!data.grossSalary || !data.gender) return;

  let percentile;

  let comment;
  let people;

  if (user.gender === "Male") {
    people = "men";
    percentile = data.gender.percentile;
  } else {
    people = "women";
    percentile = data.gender.percentile;
  }

  const upperDifference = 100 - percentile;
  if (percentile < 50) {
    comment = `${upperDifference}% of ${people} earn more than you.`;
  } else if (percentile < 100) {
    comment = `You earn more than ${percentile}% of ${people}.`;
  } else {
    comment = `You earn more than every ${people} who took the survey.`;
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
