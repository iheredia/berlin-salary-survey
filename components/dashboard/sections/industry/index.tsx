import { User } from "@/data/types";
import BaseSection from "../base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function IndustrySection(props: SalarySectionProps) {
  return (
    <BaseSection>
      Industry section
      {/* <section>
        <DeviationFromMeanChart year={year} user={user} dimension="industry" />
        <HistogramChart
          year={year}
          user={user}
          dimension="grossSalary"
          filterDimension="industry"
        />
      </section> */}
    </BaseSection>
  );
}
