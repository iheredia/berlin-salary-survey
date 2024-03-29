import { AvailableYear, User } from "@/data/types";
import SalaryForm from "./salary-form";
import BaseSection from "../base-section";
import DeviationFromMeanChart from "../../charts/deviation-from-mean-chart";
import HistogramChart from "../../charts/histogram-chart";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
  year: AvailableYear;
};

export default function SalarySection(props: SalarySectionProps) {
  const { user, setUser, year } = props;
  return (
    <>
      <BaseSection fullHeight={!user.grossSalary}>
        <SalaryForm user={user} setUser={setUser} />
        {user.grossSalary ? <p></p> : null}
        <DeviationFromMeanChart year={year} user={user} dimension="grossSalary" />
      </BaseSection>
      {user.grossSalary ? (
        <BaseSection>
          <HistogramChart year={year} user={user} dimension="grossSalary" />
        </BaseSection>
      ) : null}
    </>
  );
}
