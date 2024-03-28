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
    <BaseSection>
      <SalaryForm user={user} setUser={setUser} />
      <div style={{ width: "100%" }}>
        <DeviationFromMeanChart year={year} user={user} dimension="grossSalary" />
      </div>
      <div style={{ width: "100%" }}>
        <HistogramChart year={year} user={user} dimension="grossSalary" />
      </div>
    </BaseSection>
  );
}
