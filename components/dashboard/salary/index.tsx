import BaseSection from "../components/base-section";
import SalaryForm from "./salary-form";
import SalaryComment from "./comment";
import GradientChart from "./gradient";
import SalaryHistogramChart from "./histogram-chart";

export default function SalarySection() {
  return (
    <>
      <BaseSection part="top">
        <SalaryForm />
        <SalaryComment />
        <GradientChart />
      </BaseSection>
      <BaseSection part="bottom">
        <SalaryHistogramChart />
      </BaseSection>
    </>
  );
}
