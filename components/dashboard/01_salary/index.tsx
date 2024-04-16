import BaseSection from "../components/base-section";
import SalaryForm from "./salary-form";
import SalaryComment from "./salary-comment";
import SalaryGradientChart from "./salary-gradient";
import SalaryChart from "./salary-chart";

export default function SalarySection() {
  return (
    <BaseSection>
      <SalaryForm />
      <SalaryComment />
      <SalaryGradientChart />
      <SalaryChart />
    </BaseSection>
  );
}
