import { useContext } from "react";
import AppContext from "@/components/context";
import BaseComment from "../components/base-comment";

export default function IndustryComment() {
  const { data, user } = useContext(AppContext);
  if (!data.grossSalary || !data.industry || !user.industry || !user.grossSalary) return;

  const industryAverage = data.industry.averages[user.industry];

  const percentageDiff = industryAverage / user.grossSalary;
  const distance =
    0.91 < percentageDiff && percentageDiff < 1.09
      ? "pretty close of"
      : percentageDiff > 1
      ? "below"
      : "above";
  return (
    <BaseComment>
      Your salary of <strong> ${user.grossSalary.toLocaleString()} </strong> is {distance} the{" "}
      {user.industry} industry average salary of{" "}
      <strong>${industryAverage.toLocaleString()}</strong>
    </BaseComment>
  );
}
