import { User } from "@/data/types";
import Select from "../select";
import BaseSection from "../base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function EducationSection(props: SalarySectionProps) {
  return (
    <BaseSection fullHeight={!props.user.education}>
      Education section
      <Select dimension="education" setUser={props.setUser} />
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
