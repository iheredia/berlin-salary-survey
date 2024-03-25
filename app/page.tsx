"use client";
import { useState } from "react";

import UserForm, { User } from "@/components/user-form";

import DeviationFromMeanChart from "@/components/charts/deviation-from-mean-chart";
import ScatterChart from "@/components/charts/scatter-chart";
import HistogramChart from "@/components/charts/histogram-chart";

import styles from "./page.module.css";

export default function Home() {
  const [user, setUser] = useState<User>({});
  const year = 2023;

  return (
    <main className={styles.main}>
      <section>
        <h1>Berlin salary survey {year}</h1>
        <h2>How are you paid?</h2>
        <p>Welcome to the analysis of the {year} Handpicked Berlin Salary Survey.</p>
        <p>
          Here you can find general statistics of the survey and an interactive section to see{" "}
          <strong>how does your salary compare?</strong> against the survey.
        </p>
        <p>
          If it&apos;s your first time heare, try filling your data to compare yourself agaisnt the
          survey.
        </p>

        <UserForm user={user} setUser={setUser} />
        <DeviationFromMeanChart year={year} user={user} dimension="grossSalary" />
        <DeviationFromMeanChart year={year} user={user} dimension="age" />
        <DeviationFromMeanChart year={year} user={user} dimension="gender" />
        <DeviationFromMeanChart year={year} user={user} dimension="experience" />
        <DeviationFromMeanChart year={year} user={user} dimension="citizenship" />
        <DeviationFromMeanChart year={year} user={user} dimension="education" />
        <DeviationFromMeanChart year={year} user={user} dimension="organizationType" />
        <DeviationFromMeanChart year={year} user={user} dimension="industry" />
        <DeviationFromMeanChart year={year} user={user} dimension="role" />

        {/* <p>User info:</p>
        <pre>
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre> */}

        {/* <HistogramChart year={year} dimension="grossSalary" /> */}
        {/* <HistogramChart year={year} dimension="bonus" /> */}
        {/* <HistogramChart year={year} dimension="equity" /> */}
        {/* <ScatterChart year={year} dimensionX="hoursPerWeek" dimensionY="grossSalary" /> */}
      </section>
    </main>
  );
}
