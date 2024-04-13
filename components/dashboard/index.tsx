"use client";
import { useContext } from "react";

import SalarySection from "./01_salary";
import PositionSection from "./02_position";
import GenderSection from "./03_gender";
import IndustrySection from "./04_industry";
import RoleSection from "./05_role";
// import CategorySection from "./category-section";
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
          {/* <CategorySection dimension="age" />
          <CategorySection dimension="experience" />
          <CategorySection dimension="citizenship" />
          <CategorySection dimension="education" />
          <CategorySection dimension="organizationType" />
          <CategorySection dimension="position" />
           */}
        </>
      ) : null}
    </>
  );
}
