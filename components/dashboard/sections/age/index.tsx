import { User } from "@/data/types";
import BaseSection from "../base-section";

type SalarySectionProps = {
  setUser: CallableFunction;
  user: User;
};
export default function AgeSection(props: SalarySectionProps) {
  return <BaseSection>Age section</BaseSection>;
}
