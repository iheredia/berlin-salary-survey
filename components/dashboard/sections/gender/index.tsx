import { User } from "@/data/types";
import BaseSection from "../base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function GenderSection(props: SalarySectionProps) {
  return (
    <BaseSection>
      Gender section
      {/* <section>
        <DeviationFromMeanChart year={year} user={user} dimension="gender" />
        <HistogramChart year={year} user={user} dimension="grossSalary" filterDimension="gender" />
      </section> */}
    </BaseSection>
  );
}
