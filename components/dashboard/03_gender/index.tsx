import BaseSection from "../components/base-section";
import GenderForm from "./gender-form";
import GenderComment from "./gender-comment";
import GenderChart from "./gender-chart";

export default function GenderSection() {
  return (
    <BaseSection>
      <GenderForm />
      <GenderComment />
      <GenderChart />
    </BaseSection>
  );
}
