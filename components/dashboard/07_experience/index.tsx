import BaseSection from "../components/base-section";
import ExperienceForm from "./experience-form";
import ExperienceComment from "./experience-comment";
import ExperienceChart from "./experience-chart";

export default function ExperienceSection() {
  return (
    <BaseSection>
      <ExperienceForm />
      <ExperienceComment />
      <ExperienceChart />
    </BaseSection>
  );
}
