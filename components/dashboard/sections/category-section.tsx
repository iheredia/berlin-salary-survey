import { AvailableYear, UserComparisonData, User, Dimension, StringDimension } from "@/data/types";
import Select from "./select";
import BaseSection from "./base-section";
import DeviationFromMeanChart from "../charts/deviation-from-mean-chart";
import HistogramChart from "../charts/histogram-chart";
import SalaryComment from "./comment";

type CategorySectionProps = {
  setUser: CallableFunction;
  user: User;
  year: AvailableYear;
  dimension: StringDimension;
  loadingData: boolean;
  data?: UserComparisonData;
};
export default function CategorySection(props: CategorySectionProps) {
  const { user, setUser, year, dimension, loadingData, data } = props;
  const dimensionData = data?.[dimension];
  return (
    <>
      <BaseSection fullHeight={!user[dimension]} loading={loadingData}>
        <Select dimension={dimension} setUser={setUser} />
        {dimensionData ? (
          <>
            <SalaryComment percentile={dimensionData.percentile} />
            <DeviationFromMeanChart year={year} userPercentile={dimensionData.percentile} />
          </>
        ) : null}
      </BaseSection>
      {dimensionData ? (
        <BaseSection loading={loadingData}>
          <HistogramChart
            year={year}
            user={user}
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
