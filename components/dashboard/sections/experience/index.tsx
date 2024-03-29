import { User } from "@/data/types";
import Select from "../select";
import BaseSection from "../base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function ExperienceSection(props: SalarySectionProps) {
  return (
    <BaseSection fullHeight={!props.user.experience}>
      Experience section
      <Select dimension="experience" setUser={props.setUser} />
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
