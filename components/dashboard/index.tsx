"use client";
import { useContext } from "react";

import SalarySection from "./salary";
import GenderSection from "./gender";
import IndustrySection from "./industry";
import PositionSection from "./position";
import RoleSection from "./role";
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
