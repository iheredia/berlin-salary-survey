"use client";
import { useContext } from "react";

import SalarySection from "./sections/salary";
import CategorySection from "./sections/category-section";
import AppContext from "../context";

export default function Dashboard() {
  const { user } = useContext(AppContext);
  return (
    <>
      <SalarySection />
      {user.grossSalary ? (
        <>
          <CategorySection dimension="age" />
          <CategorySection dimension="gender" />
          <CategorySection dimension="experience" />
          <CategorySection dimension="citizenship" />
          <CategorySection dimension="education" />
          <CategorySection dimension="organizationType" />
          <CategorySection dimension="industry" />
          <CategorySection dimension="role" />
        </>
      ) : null}

      {/* <HistogramChart year={year} dimension="bonus" /> */}
      {/* <HistogramChart year={year} dimension="equity" /> */}
      {/* <ScatterChart year={year} dimensionX="hoursPerWeek" dimensionY="grossSalary" /> */}
    </>
  );
}
