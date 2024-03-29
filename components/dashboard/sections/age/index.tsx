import { User } from "@/data/types";
import BaseSection from "../base-section";
import Select from "../select";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function AgeSection(props: SalarySectionProps) {
  return (
    <BaseSection fullHeight={!props.user.age}>
      Age section
      <Select dimension="age" setUser={props.setUser} />
      {/* <section>
        <DeviationFromMeanChart year={year} user={user} dimension="age" />
        <HistogramChart year={year} user={user} dimension="grossSalary" filterDimension="age" />
      </section> */}
    </BaseSection>
  );
}
