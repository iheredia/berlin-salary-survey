import { useContext } from "react";
import AppContext from "@/components/context";
import BaseComment from "../components/base-comment";

export default function PositionComment() {
  const { data, user } = useContext(AppContext);
  if (!data.grossSalary || !user.position) return;

  return (
    <BaseComment>Pending comparisong agaisnt the rest of &quot;{user.position}&quot;</BaseComment>
  );
}
