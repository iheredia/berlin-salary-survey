"use client";
import { useContext } from "react";

import SalarySection from "./01_salary";
import PositionSection from "./02_position";
import GenderSection from "./03_gender";
import IndustrySection from "./04_industry";
import RoleSection from "./05_role";
import SatisfactionSection from "./06_satisfaction";
import ExperienceSection from "./07_experience";
import AppContext from "../context";

export default function Dashboard() {
  const { user } = useContext(AppContext);
  return (
    <>
      <SalarySection />
      {user.grossSalary ? (
        <>
          <PositionSection />
          <GenderSection />
          <IndustrySection />
          <RoleSection />
          <SatisfactionSection />
          <ExperienceSection />
        </>
      ) : null}
    </>
  );
}
