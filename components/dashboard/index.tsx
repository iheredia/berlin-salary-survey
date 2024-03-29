"use client";
import { useState } from "react";
import { AvailableYear, User } from "@/data/types";

import SalarySection from "./sections/salary";
import AgeSection from "./sections/age";
import GenderSection from "./sections/gender";
import ExperienceSection from "./sections/experience";
import CitizenshipSection from "./sections/citizenship";
import EducationSection from "./sections/education";
import OrganizationTypeSection from "./sections/organization-type";
import IndustrySection from "./sections/industry";
import RoleSection from "./sections/role";

const DEBUG = true;

export default function Dashboard(props: { year: AvailableYear }) {
  const [user, _setUser] = useState<User>({});
  const setUser = (user: User) => {
    if (DEBUG) console.log(user);
    _setUser(user);
  };
  const { year } = props;

  return (
    <>
      <SalarySection year={year} user={user} setUser={setUser} />
      {user.grossSalary ? (
        <>
          <AgeSection user={user} setUser={setUser} />
          <GenderSection user={user} setUser={setUser} />
          <ExperienceSection user={user} setUser={setUser} />
          <CitizenshipSection user={user} setUser={setUser} />
          <EducationSection user={user} setUser={setUser} />
          <OrganizationTypeSection user={user} setUser={setUser} />
          <IndustrySection user={user} setUser={setUser} />
          <RoleSection user={user} setUser={setUser} />
        </>
      ) : null}

      {/* <HistogramChart year={year} dimension="bonus" /> */}
      {/* <HistogramChart year={year} dimension="equity" /> */}
      {/* <ScatterChart year={year} dimensionX="hoursPerWeek" dimensionY="grossSalary" /> */}
    </>
  );
}
