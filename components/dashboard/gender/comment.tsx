import { useContext } from "react";
import AppContext from "@/components/context";
import BaseComment from "../components/base-comment";

export default function GenderComment() {
  const { user, data } = useContext(AppContext);
  if (!data.grossSalary || !data.gender) return;

  const { percentile } = data.gender;
  const upperDifference = 100 - percentile;

  let comment;
  let people;

  if (user.gender === "Male") {
    people = "men";
  } else if (user.gender === "Female") {
    people = "women";
  } else {
    people = "people";
  }

  if (percentile < 20) {
    comment = `${comment} ${upperDifference}% of ${people} earn more than you in Berlin 😓`;
  } else if (percentile < 50) {
    comment = `${comment} ${upperDifference}% of ${people} earn more than you 😕`;
  } else if (percentile < 75) {
    comment = `You earn more than ${percentile}% of ${people} 🤑`;
  } else if (percentile < 100) {
    comment = `Only ${upperDifference}% of ${people} earn more than you 💰💰`;
  } else {
    comment = `You earn more than ${
      people === "people" ? "everyone" : `every ${people}`
    } who took the survey 😎`;
  }
  return <BaseComment>{comment}</BaseComment>;
}
