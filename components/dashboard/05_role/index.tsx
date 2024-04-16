import BaseSection from "../components/base-section";
import RoleForm from "./role-form";
import RoleComment from "./role-comment";
import RoleChart from "./role-chart";

export default function RoleSection() {
  return (
    <BaseSection>
      <RoleForm />
      <RoleComment />
      <RoleChart />
    </BaseSection>
  );
}
