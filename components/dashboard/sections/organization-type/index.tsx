import { User } from "@/data/types";
import Select from "../select";
import BaseSection from "../base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function OrganizationTypeSection(props: SalarySectionProps) {
  return (
    <BaseSection fullHeight={!props.user.organizationType}>
      OrganizationType section
      <Select dimension="organizationType" setUser={props.setUser} />
      {/* <section>
        <DeviationFromMeanChart year={year} user={user} dimension="organizationType" />
        <HistogramChart
          year={year}
          user={user}
          dimension="grossSalary"
          filterDimension="organizationType"
        />
      </section> */}
    </BaseSection>
  );
}
