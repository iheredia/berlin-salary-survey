import BaseSection from "../components/base-section";
import PositionForm from "./position-form";
import PositionComment from "./position-comment";
import PositionChart from "./position-chart";

export default function IndustrySection() {
  return (
    <BaseSection>
      <PositionForm />
      <PositionComment />
      <PositionChart />
    </BaseSection>
  );
}
