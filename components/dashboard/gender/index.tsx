import BaseSection from "../components/base-section";
import GenderForm from "./gender-form";
import GenderComment from "./comment";
import SplineChart from "./spline-chart";

export default function GenderSection() {
  return (
    <BaseSection>
      <GenderForm />
      <GenderComment />
      <SplineChart />
    </BaseSection>
  );
}
