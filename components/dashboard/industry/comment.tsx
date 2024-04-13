import { useContext } from "react";
import AppContext from "@/components/context";
import BaseComment, { Strong } from "../components/base-comment";

export default function IndustryComment() {
  const { data, user } = useContext(AppContext);

  let comment;
  if (data.industry && user.industry && user.grossSalary) {
    const industryAverage = data.industry.averages[user.industry];

    const percentageDiff = industryAverage / user.grossSalary;
    const distance =
      0.91 < percentageDiff && percentageDiff < 1.09
        ? "pretty close of"
        : percentageDiff > 1
        ? "below"
        : "above";
    comment = (
      <>
        Your salary of <Strong>€ {user.grossSalary.toLocaleString()}</Strong> is {distance} the{" "}
        {user.industry} industry average salary of{" "}
        <Strong>€ {industryAverage.toLocaleString()}</Strong>
      </>
    );
  }
  return <BaseComment hidden={!user.industry}>{comment}</BaseComment>;
}
