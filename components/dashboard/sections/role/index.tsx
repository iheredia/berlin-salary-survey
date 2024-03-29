import { User } from "@/data/types";
import BaseSection from "@/components/layout/base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function RoleSection(props: SalarySectionProps) {
  return (
    <BaseSection fullHeight={!props.user.role}>
      Role section
      {/* <section>
        <DeviationFromMeanChart year={year} user={user} dimension="role" />
        <HistogramChart year={year} user={user} dimension="grossSalary" filterDimension="role" />
      </section> */}
    </BaseSection>
  );
}
