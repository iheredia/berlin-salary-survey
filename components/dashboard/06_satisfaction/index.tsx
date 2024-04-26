import BaseSection from "../components/base-section";
import SatisfactionForm from "./satisfaction-form";
import SatisfactionFirstComment from "./satisfaction-first-comment";
import SatisfactionAmpelChart from "./satisfaction-ampel-chart";
import SatisfactionSecondComment from "./satisfaction-second-comment";
import SatisfactionHistogramChart from "./satisfaction-histogram-chart";

export default function SatisfactionSection() {
  return (
    <BaseSection>
      <SatisfactionForm />
      <SatisfactionFirstComment />
      <SatisfactionAmpelChart />
      <SatisfactionSecondComment />
      <SatisfactionHistogramChart />
    </BaseSection>
  );
}
