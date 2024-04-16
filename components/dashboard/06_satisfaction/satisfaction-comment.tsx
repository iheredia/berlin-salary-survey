import { useContext } from "react";
import AppContext from "@/components/context";
import BaseComment from "../components/base-comment";

export default function SatisfactionComment() {
  const { data, user } = useContext(AppContext);

  let comment;

  if (data.satisfaction) {
    const percentage1 = Math.round(data.satisfaction.all[0] * 100);
    const percentage2 = Math.round(data.satisfaction.all[1] * 100);
    const percentage3 = Math.round(data.satisfaction.all[2] * 100);
    const percentage4 = Math.round(data.satisfaction.all[3] * 100);
    const percentage5 = 100 - percentage1 - percentage2 - percentage3 - percentage4;
    if (user.satisfaction === 1) {
      comment = <p>{percentage1}% of people are unsatisfied as you</p>;
    } else if (user.satisfaction === 2) {
      comment = (
        <p>{percentage3 + percentage4 + percentage5}% of people are more satisfied than you.</p>
      );
    } else if (user.satisfaction === 3) {
      comment = <p>You are more satisfied than {percentage1 + percentage2}% of people.</p>;
    } else if (user.satisfaction === 4) {
      comment = (
        <p>You are more satisfied than {percentage1 + percentage2 + percentage3}% of people.</p>
      );
    } else {
      comment = <p>{percentage5}% of people are as satisfied as you</p>;
    }
  }

  return <BaseComment hidden={!user.satisfaction}>{comment}</BaseComment>;
}
