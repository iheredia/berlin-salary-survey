import { User } from "@/data/types";
import BaseSection from "../base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function CitizenshipSection(props: SalarySectionProps) {
  return (
    <BaseSection>
      Citizenship section
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
