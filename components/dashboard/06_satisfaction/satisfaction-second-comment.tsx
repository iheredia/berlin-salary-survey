import { useContext } from "react";
import AppContext from "@/components/context";
import BaseComment from "../components/base-comment";

export default function SatisfactionSecondComment() {
  const { data, user } = useContext(AppContext);

  let comment;

  if (data.satisfaction) {
    const notSatisfied = data.satisfaction.sameSalary[0] + data.satisfaction.sameSalary[1];
    const neutral = data.satisfaction.sameSalary[2];
    const satisfied = data.satisfaction.sameSalary[3] + data.satisfaction.sameSalary[4];
    const max = Math.max(notSatisfied, neutral, satisfied);
    const satisfaction =
      max === neutral ? "neutral" : max === notSatisfied ? "not satisfied" : "satisfied";
    comment = `Most people with your same salary (+/- 10%) are ${satisfaction} with their salary`;
  }

  return <BaseComment hidden={!user.satisfaction}>{comment}</BaseComment>;
}
