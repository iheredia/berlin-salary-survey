import { StringDimension } from "@/data/types";
import Select from "./select";
import BaseSection from "../base-section";
import GradientChart from "../../charts/gradient";
import HistogramChart from "../../charts/histogram-chart";
import SalaryComment from "../comment";
import { useContext } from "react";
import AppContext from "@/components/context";

type CategorySectionProps = {
  dimension: StringDimension;
};
export default function CategorySection(props: CategorySectionProps) {
  const { dimension } = props;
  const { data } = useContext(AppContext);
  const dimensionData = data?.[dimension];
  return (
    <>
      <BaseSection fullHeightHint={!dimensionData} part={dimensionData ? "top" : undefined}>
        <Select dimension={dimension} />
        {dimensionData ? (
          <>
            <SalaryComment percentile={dimensionData.percentile} dimension={dimension} />
            <GradientChart userPercentile={dimensionData.percentile} />
          </>
        ) : null}
      </BaseSection>
      {dimensionData ? (
        <BaseSection part="bottom">
          <HistogramChart
            dimension="grossSalary"
            filterDimension={dimension}
            histogramSeries={dimensionData.histogramSeries}
            histogramBuckets={dimensionData.histogramBuckets}
            histogramCategories={dimensionData.histogramCategories}
          />
        </BaseSection>
      ) : null}
    </>
  );
}
