import SalaryForm from "./salary-form";
import BaseSection from "../base-section";
import DeviationFromMeanChart from "../../charts/deviation-from-mean-chart";
import HistogramChart from "../../charts/histogram-chart";
import SalaryComment from "../comment";
import { useContext } from "react";
import AppContext from "@/components/context";

export default function SalarySection() {
  const { user, data } = useContext(AppContext);
  return (
    <>
      <BaseSection fullHeight={!user.grossSalary}>
        <SalaryForm />
        {data?.grossSalary ? (
          <>
            <SalaryComment percentile={data.grossSalary.percentile} />
            <DeviationFromMeanChart userPercentile={data.grossSalary.percentile} />
          </>
        ) : null}
      </BaseSection>
      {data?.grossSalary ? (
        <BaseSection>
          <HistogramChart
            dimension="grossSalary"
            histogramSeries={data.grossSalary.histogramSeries}
            histogramBuckets={data.grossSalary.histogramBuckets}
            histogramCategories={data.grossSalary.histogramCategories}
          />
        </BaseSection>
      ) : null}
    </>
  );
}
