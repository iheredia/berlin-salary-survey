import BaseSection from "../components/base-section";
import IndustryForm from "./industry-form";
import IndustryComment from "./industry-comment";
import IndustryChart from "./industry-chart";

export default function IndustrySection() {
  return (
    <BaseSection>
      <IndustryForm />
      <IndustryComment />
      <IndustryChart />
    </BaseSection>
  );
}
