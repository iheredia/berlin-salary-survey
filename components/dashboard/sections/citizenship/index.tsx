import { User } from "@/data/types";
import Select from "../select";
import BaseSection from "../base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function CitizenshipSection(props: SalarySectionProps) {
  return (
    <BaseSection fullHeight={!props.user.citizenship}>
      Citizenship section
      <Select dimension="citizenship" setUser={props.setUser} />
      {/* <section>
        <DeviationFromMeanChart year={year} user={user} dimension="citizenship" />
        <HistogramChart
          year={year}
          user={user}
          dimension="grossSalary"
          filterDimension="citizenship"
        />
      </section> */}
    </BaseSection>
  );
}
