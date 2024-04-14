import BaseSection from "../components/base-section";
import SatisfactionForm from "./satisfaction-form";
import SatisfactionComment from "./comment";
import SatisfactionAmpelChart from "./ampel-chart";

export default function SatisfactionSection() {
  return (
    <BaseSection>
      <SatisfactionForm />
      <SatisfactionComment />
      <SatisfactionAmpelChart />
    </BaseSection>
  );
}
