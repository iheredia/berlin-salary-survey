"use client";
import { useState } from "react";
import { AvailableYear, User } from "@/data/types";
import classNames from "classnames";

import styles from "./index.module.css";

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
  const dashboardClassName = classNames(
    styles.dashboard,
    user.grossSalary ? styles.dashboardWithSalary : ""
  );
  return (
    <>
      <section className={dashboardClassName}>
        <SalarySection user={user} setUser={setUser} />
      </section>
      {user.grossSalary ? (
        <>
          <section className={dashboardClassName}>
            <AgeSection user={user} setUser={setUser} />
          </section>
          <section className={dashboardClassName}>
            <GenderSection user={user} setUser={setUser} />
          </section>
          <section className={dashboardClassName}>
            <ExperienceSection user={user} setUser={setUser} />
          </section>
          <section className={dashboardClassName}>
            <CitizenshipSection user={user} setUser={setUser} />
          </section>
          <section className={dashboardClassName}>
            <EducationSection user={user} setUser={setUser} />
          </section>
          <section className={dashboardClassName}>
            <OrganizationTypeSection user={user} setUser={setUser} />
          </section>
          <section className={dashboardClassName}>
            <IndustrySection user={user} setUser={setUser} />
          </section>
          <section className={dashboardClassName}>
            <RoleSection user={user} setUser={setUser} />
          </section>
        </>
      ) : null}

      {/* <HistogramChart year={year} dimension="bonus" /> */}
      {/* <HistogramChart year={year} dimension="equity" /> */}
      {/* <ScatterChart year={year} dimensionX="hoursPerWeek" dimensionY="grossSalary" /> */}
    </>
  );
}
