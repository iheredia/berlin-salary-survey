"use client";
import { useContext } from "react";

import SalarySection from "./salary";
import GenderSection from "./gender";
import IndustrySection from "./industry";
// import CategorySection from "./category-section";
import AppContext from "../context";

export default function Dashboard() {
  const { user } = useContext(AppContext);
  return (
    <>
      <SalarySection />
      {user.grossSalary ? (
        <>
          <GenderSection />
          <IndustrySection />
          {/* <CategorySection dimension="age" />
          <CategorySection dimension="experience" />
          <CategorySection dimension="citizenship" />
          <CategorySection dimension="education" />
          <CategorySection dimension="organizationType" />
          <CategorySection dimension="role" />
          <CategorySection dimension="position" />
           */}
        </>
      ) : null}

      {/* <HistogramChart year={year} dimension="bonus" /> */}
      {/* <HistogramChart year={year} dimension="equity" /> */}
      {/* <ScatterChart year={year} dimensionX="hoursPerWeek" dimensionY="grossSalary" /> */}
    </>
  );
}
