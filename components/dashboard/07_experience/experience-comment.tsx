import { useContext } from "react";
import AppContext from "@/components/context";
import BaseComment from "../components/base-comment";

export default function ExperienceComment() {
  const { data, user } = useContext(AppContext);

  let comment;

  if (data.experience) {
  }

  return <BaseComment hidden={!user.experience}>{comment}</BaseComment>;
}
