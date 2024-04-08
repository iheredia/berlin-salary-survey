import BaseSection from "../components/base-section";
import GenderForm from "./gender-form";
import GenderComment from "./comment";
import SplineChart from "./spline-chart";

export default function GenderSection() {
  return (
    <>
      <BaseSection part="top">
        <GenderForm />
        <GenderComment />
      </BaseSection>
      <BaseSection part="bottom">
        <SplineChart />
      </BaseSection>
    </>
  );
}
