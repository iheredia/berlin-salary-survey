import BaseSection from "../components/base-section";
import PositionForm from "./position-form";
import PositionComment from "./comment";

export default function IndustrySection() {
  return (
    <BaseSection>
      <PositionForm />
      <PositionComment />
    </BaseSection>
  );
}
