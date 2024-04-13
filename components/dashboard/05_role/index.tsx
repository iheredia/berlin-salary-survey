import BaseSection from "../components/base-section";
import RoleForm from "./role-form";
import RoleComment from "./comment";
import RoleBarChart from "./bar-chart";

export default function RoleSection() {
  return (
    <BaseSection>
      <RoleForm />
      <RoleComment />
      <RoleBarChart />
    </BaseSection>
  );
}
