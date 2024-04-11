import { useContext } from "react";
import AppContext from "@/components/context";
import BaseComment from "../components/base-comment";

export default function SalaryComment() {
  const { data } = useContext(AppContext);
  if (!data.grossSalary) return;

  const { percentile } = data.grossSalary;
  const upperDifference = 100 - percentile;

  let comment;
  if (percentile < 50) {
    comment = (
      <>You are in the lower range of salaries. {upperDifference}% of people earn more than you</>
    );
  } else if (percentile < 100) {
    comment = (
      <>You are in the upper range of salaries, earning more than {percentile}% of people.</>
    );
  } else {
    comment = "You earn more than everyone who took the survey.";
  }
  return <BaseComment>{comment}</BaseComment>;
}
