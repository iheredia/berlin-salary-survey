import { AvailableYear, User, UserComparisonData } from "@/data/types";
import SalaryForm from "./salary-form";
import BaseSection from "../base-section";
import DeviationFromMeanChart from "../../charts/deviation-from-mean-chart";
import HistogramChart from "../../charts/histogram-chart";
import SalaryComment from "../comment";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
  year: AvailableYear;
  loadingData: boolean;
  data?: UserComparisonData;
};

export default function SalarySection(props: SalarySectionProps) {
  const { user, setUser, year, loadingData, data } = props;
  return (
    <>
      <BaseSection fullHeight={!user.grossSalary} loading={loadingData}>
        <SalaryForm user={user} setUser={setUser} />
        {data?.grossSalary ? (
          <>
            <SalaryComment percentile={data.grossSalary.percentile} />
            <DeviationFromMeanChart year={year} userPercentile={data.grossSalary.percentile} />
          </>
        ) : null}
      </BaseSection>
      {data?.grossSalary ? (
        <BaseSection loading={loadingData}>
          <HistogramChart
            year={year}
            user={user}
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
