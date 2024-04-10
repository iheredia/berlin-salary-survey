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

  if (percentile < 20) {
    comment = `${upperDifference}% of ${people} earn more than you in Berlin 😓`;
  } else if (percentile < 50) {
    comment = `${upperDifference}% of ${people} earn more than you 😕`;
  } else if (percentile < 75) {
    comment = `You earn more than ${percentile}% of ${people} 🤑`;
  } else if (percentile < 100) {
    comment = `Only ${upperDifference}% of ${people} earn more than you 💰💰`;
  } else {
    comment = `You earn more than all of the ${people} who took the survey 😎`;
  }

  return (
    <BaseComment>
      <p>{comment}</p>
      <p>
        Unsurprisingly, the average salary for individual contributors is{" "}
        <Strong>€ {averages.individualContributor}</Strong> while the average salary for people
        managers is <Strong>€ {averages.peopleManager}</Strong>
      </p>
    </BaseComment>
  );
}
