import GenderForm from "./gender-form";
import BaseSection from "../base-section";
import { useContext } from "react";
import AppContext from "@/components/context";
import SplineChart from "./spline-chart";

export default function GenderSection() {
  const { user, data } = useContext(AppContext);
  return (
    <>
      <BaseSection part={data.gender ? "top" : undefined}>
        <GenderForm />
      </BaseSection>
      {data?.gender ? (
        <>
          <BaseSection part="bottom">
            {/* <SalaryComment percentile={data.grossSalary.percentile} />
            <GradientChart userPercentile={data.grossSalary.percentile} /> */}
            <SplineChart
              dimension="grossSalary"
              histogramSeries={data.gender.histogramSeries}
              histogramBuckets={data.gender.histogramBuckets}
              histogramCategories={data.gender.histogramCategories}
            />
          </BaseSection>
        </>
      ) : null}
    </>
  );
}
