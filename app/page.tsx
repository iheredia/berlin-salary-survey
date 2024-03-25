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

        <div className={styles.section}>
          <DeviationFromMeanChart year={year} user={user} dimension="grossSalary" />
          <HistogramChart year={year} user={user} dimension="grossSalary" />
        </div>

        <div className={styles.section}>
          <DeviationFromMeanChart year={year} user={user} dimension="age" />
          <HistogramChart year={year} user={user} dimension="grossSalary" filterDimension="age" />
        </div>

        <div className={styles.section}>
          <DeviationFromMeanChart year={year} user={user} dimension="gender" />
          <HistogramChart
            year={year}
            user={user}
            dimension="grossSalary"
            filterDimension="gender"
          />
        </div>

        <div className={styles.section}>
          <DeviationFromMeanChart year={year} user={user} dimension="experience" />
          <HistogramChart
            year={year}
            user={user}
            dimension="grossSalary"
            filterDimension="experience"
          />
        </div>

        <div className={styles.section}>
          <DeviationFromMeanChart year={year} user={user} dimension="citizenship" />
          <HistogramChart
            year={year}
            user={user}
            dimension="grossSalary"
            filterDimension="citizenship"
          />
        </div>

        <div className={styles.section}>
          <DeviationFromMeanChart year={year} user={user} dimension="education" />
          <HistogramChart
            year={year}
            user={user}
            dimension="grossSalary"
            filterDimension="education"
          />
        </div>

        <div className={styles.section}>
          <DeviationFromMeanChart year={year} user={user} dimension="organizationType" />
          <HistogramChart
            year={year}
            user={user}
            dimension="grossSalary"
            filterDimension="organizationType"
          />
        </div>

        <div className={styles.section}>
          <DeviationFromMeanChart year={year} user={user} dimension="industry" />
          <HistogramChart
            year={year}
            user={user}
            dimension="grossSalary"
            filterDimension="industry"
          />
        </div>

        <div className={styles.section}>
          <DeviationFromMeanChart year={year} user={user} dimension="role" />
          <HistogramChart year={year} user={user} dimension="grossSalary" filterDimension="role" />
        </div>

        {/* <p>User info:</p>
        <pre>
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre> */}

        {/* <HistogramChart year={year} dimension="bonus" /> */}
        {/* <HistogramChart year={year} dimension="equity" /> */}
        {/* <ScatterChart year={year} dimensionX="hoursPerWeek" dimensionY="grossSalary" /> */}
      </section>
    </main>
  );
}
