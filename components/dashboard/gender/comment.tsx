import { useContext } from "react";
import AppContext from "@/components/context";
import BaseComment from "../components/base-comment";

export default function GenderComment() {
  const { data } = useContext(AppContext);
  if (!data.grossSalary || !data.gender) return;

  const { percentile } = data.grossSalary;
  const upperDifference = 100 - percentile;

  let comment;
  if (percentile < 20) {
    comment = `😨 you are in the bottom range of salaries. ${upperDifference}% of people earn more than you in Berlin 💸`;
  } else if (percentile < 50) {
    comment = `😕 you are not all the way at the bottom but there is a lot of room for improvement. ${upperDifference}% of people earn more than you`;
  } else if (percentile < 75) {
    comment = `Not bad 🤑. You are in the upper range of salaries, earning more than ${percentile}% of people.`;
  } else if (percentile < 100) {
    return (comment = `🥳 niiice. You are in the top range of salaries. Only ${upperDifference}% of people earn more than you 💰💰`);
  } else {
    comment =
      "Oh wow. Are you sure you wrote that? You earn more than everyone who took the survey 😎";
  }
  return <BaseComment>{comment}</BaseComment>;
}
