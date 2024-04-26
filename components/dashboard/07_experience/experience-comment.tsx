import { useContext } from "react";
import AppContext from "@/components/context";
import BaseComment from "../components/base-comment";

export default function ExperienceComment() {
  const { data, user } = useContext(AppContext);

  let comment;

  if (data.experience) {
    const { percentile } = data.experience;
    const upperDifference = 100 - percentile;

    if (percentile < 50) {
      comment = `${upperDifference}% of people with the same experience earn more than you`;
    } else if (percentile < 100) {
      comment = `You earn more than ${percentile}% of people with the same experience`;
    } else {
      comment = `You earn more than all respondents with the same experience`;
    }
  }

  return <BaseComment hidden={!user.experience}>{comment}</BaseComment>;
}
