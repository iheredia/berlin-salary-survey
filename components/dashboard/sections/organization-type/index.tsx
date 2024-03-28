import { User } from "@/data/types";
import BaseSection from "../base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function OrganizationTypeSection(props: SalarySectionProps) {
  return (
    <BaseSection>
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
