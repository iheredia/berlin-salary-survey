import { User } from "@/data/types";
import SalaryForm from "./salary-form";
import BaseSection from "../base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function SalarySection(props: SalarySectionProps) {
  return (
    <BaseSection>
      <SalaryForm user={props.user} setUser={props.setUser} />
      {/* <section>
        <DeviationFromMeanChart year={year} user={user} dimension="grossSalary" />
        <HistogramChart year={year} user={user} dimension="grossSalary" />
      </section> */}
    </BaseSection>
  );
}
