import { User } from "@/data/types";
import BaseSection from "../base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function AgeSection(props: SalarySectionProps) {
  return (
    <BaseSection>
      Age section
      {/* <section>
        <DeviationFromMeanChart year={year} user={user} dimension="age" />
        <HistogramChart year={year} user={user} dimension="grossSalary" filterDimension="age" />
      </section> */}
    </BaseSection>
  );
}
