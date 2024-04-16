import BaseSection from "../components/base-section";
import SatisfactionForm from "./satisfaction-form";
import SatisfactionComment from "./satisfaction-comment";
import SatisfactionChart from "./satisfaction-chart";

export default function SatisfactionSection() {
  return (
    <BaseSection>
      <SatisfactionForm />
      <SatisfactionComment />
      <SatisfactionChart />
    </BaseSection>
  );
}
