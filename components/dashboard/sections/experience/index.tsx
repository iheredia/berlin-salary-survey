import { User } from "@/data/types";
import BaseSection from "@/components/layout/base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function ExperienceSection(props: SalarySectionProps) {
  return (
    <BaseSection fullHeight={!props.user.experience}>
      Experience section
      {/* <section>
        <DeviationFromMeanChart year={year} user={user} dimension="experience" />
        <HistogramChart
          year={year}
          user={user}
          dimension="grossSalary"
          filterDimension="experience"
        />
      </section> */}
    </BaseSection>
  );
}
