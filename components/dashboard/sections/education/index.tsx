import { User } from "@/data/types";
import BaseSection from "@/components/layout/base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function EducationSection(props: SalarySectionProps) {
  return (
    <BaseSection fullHeight={!props.user.education}>
      Education section
      {/* <section>
        <DeviationFromMeanChart year={year} user={user} dimension="education" />
        <HistogramChart
          year={year}
          user={user}
          dimension="grossSalary"
          filterDimension="education"
        />
      </section> */}
    </BaseSection>
  );
}
