import { User } from "@/data/types";
import BaseSection from "@/components/layout/base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function OrganizationTypeSection(props: SalarySectionProps) {
  return (
    <BaseSection fullHeight={!props.user.organizationType}>
      OrganizationType section
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
