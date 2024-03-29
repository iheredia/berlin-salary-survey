import { User } from "@/data/types";
import BaseSection from "@/components/layout/base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function AgeSection(props: SalarySectionProps) {
  return (
    <BaseSection fullHeight={!props.user.age}>
      Age section
      {/* <section>
        <DeviationFromMeanChart year={year} user={user} dimension="age" />
        <HistogramChart year={year} user={user} dimension="grossSalary" filterDimension="age" />
      </section> */}
    </BaseSection>
  );
}
