import { useContext } from "react";
import AppContext from "@/components/context";
import BaseComment from "../components/base-comment";

export default function GenderComment() {
  const { user, data } = useContext(AppContext);

  let comment;

  if (data.gender) {
    let percentile;
    let people;

    if (user.gender === "Male") {
      people = "men";
      percentile = data.gender.percentile;
    } else {
      people = "women";
      percentile = data.gender.percentile;
    }

    let salaryComment;
    const upperDifference = 100 - percentile;
    if (percentile < 50) {
      salaryComment = `${upperDifference}% of ${people} earn more than you.`;
    } else if (percentile < 100) {
      salaryComment = `You earn more than ${percentile}% of ${people}.`;
    } else {
      salaryComment = `You earn more than every ${people} who took the survey.`;
    }

    comment = (
      <>
        <p>{salaryComment}</p>
        <p>
          For more gender gap data,{" "}
          <a href="https://handpickedberlin.com/startup-tech-salary-trends-berlin/" target="_blank">
            check our report
          </a>
          .
        </p>
      </>
    );
  }

  return <BaseComment hidden={!user.gender}>{comment}</BaseComment>;
}
