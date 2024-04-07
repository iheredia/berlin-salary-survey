import SalaryForm from "./salary-form";
import BaseSection from "../base-section";
import GradientChart from "./gradient";
import SalaryHistogramChart from "./histogram-chart";
import SalaryComment from "./comment";
import { useContext } from "react";
import AppContext from "@/components/context";

export default function SalarySection() {
  const { data } = useContext(AppContext);
  return (
    <>
      <BaseSection part="top">
        <SalaryForm />
        {data?.grossSalary ? (
          <>
            <SalaryComment percentile={data.grossSalary.percentile} />
            <GradientChart userPercentile={data.grossSalary.percentile} />
          </>
        ) : null}
      </BaseSection>
      <BaseSection part="bottom">
        <SalaryHistogramChart />
      </BaseSection>
    </>
  );
}
