import { User } from "@/data/types";
import BaseSection from "../base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function EducationSection(props: SalarySectionProps) {
  return (
    <BaseSection>
      Education section
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
