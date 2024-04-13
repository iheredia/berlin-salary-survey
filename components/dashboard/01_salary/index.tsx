import BaseSection from "../components/base-section";
import SalaryForm from "./salary-form";
import SalaryComment from "./comment";
import GradientChart from "./gradient";
import SalaryHistogramChart from "./histogram-chart";

export default function SalarySection() {
  return (
    <BaseSection>
      <SalaryForm />
      <SalaryComment />
      <GradientChart />
      <SalaryHistogramChart />
    </BaseSection>
  );
}
