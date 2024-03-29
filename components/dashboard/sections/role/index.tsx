import { User } from "@/data/types";
import Select from "../select";
import BaseSection from "../base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function RoleSection(props: SalarySectionProps) {
  return (
    <BaseSection fullHeight={!props.user.role}>
      Role section
      <Select dimension="role" setUser={props.setUser} />
      {/* <section>
        <DeviationFromMeanChart year={year} user={user} dimension="role" />
        <HistogramChart year={year} user={user} dimension="grossSalary" filterDimension="role" />
      </section> */}
    </BaseSection>
  );
}
