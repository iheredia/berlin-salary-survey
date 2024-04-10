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
  } else if (user.gender === "Female") {
    people = "women";
    percentile = data.gender.percentile;
  } else {
    people = "people";
    percentile = data.grossSalary.percentile;
  }

  const upperDifference = 100 - percentile;
  if (percentile < 20) {
    comment = `${upperDifference}% of ${people} earn more than you in Berlin 😓`;
  } else if (percentile < 50) {
    comment = `${upperDifference}% of ${people} earn more than you 😕`;
  } else if (percentile < 75) {
    comment = `You earn more than ${percentile}% of ${people} 🤑`;
  } else if (percentile < 100) {
    comment = `Only ${upperDifference}% of ${people} earn more than you 💰💰`;
  } else {
    comment = `You earn more than ${
      people === "people" ? "everyone" : `every ${people}`
    } who took the survey 😎`;
  }

  return (
    <BaseComment>
      <p>{comment}</p>
      <p>
        Sadly, the gender gap is definitely present in Berlin. The average salary for men is{" "}
        <Strong>€ {data.gender.averages.male.toLocaleString()}</Strong> while the average salary for
        women is <Strong>€ {data.gender.averages.female.toLocaleString()}</Strong> 😐
      </p>
    </BaseComment>
  );
}
