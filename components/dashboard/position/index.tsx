import BaseSection from "../components/base-section";
import PositionForm from "./position-form";
import PositionComment from "./comment";
import PositionScatterChart from "./scatter-chart";

export default function IndustrySection() {
  // TODO: Show both average and median
  return (
    <BaseSection>
      <PositionForm />
      <PositionComment />
      <PositionScatterChart />
    </BaseSection>
  );
}
