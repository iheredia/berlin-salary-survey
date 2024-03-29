import { User } from "@/data/types";
import BaseSection from "@/components/layout/base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function IndustrySection(props: SalarySectionProps) {
  return (
    <BaseSection fullHeight={!props.user.industry}>
      Industry section
      {/* <section>
        <DeviationFromMeanChart year={year} user={user} dimension="industry" />
        <HistogramChart
          year={year}
          user={user}
          dimension="grossSalary"
          filterDimension="industry"
        />
      </section> */}
    </BaseSection>
  );
}
