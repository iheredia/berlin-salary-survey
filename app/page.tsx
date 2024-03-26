"use client";
import { useState } from "react";

import UserForm, { User } from "@/components/user-form";

import DeviationFromMeanChart from "@/components/charts/deviation-from-mean-chart";
import ScatterChart from "@/components/charts/scatter-chart";
import HistogramChart from "@/components/charts/histogram-chart";

import styles from "./page.module.css";
import Introduction from "@/components/introduction";

export default function Home() {
  const [user, setUser] = useState<User>({});
  const year = 2023;

  return (
    <main className={styles.main}>
      <Introduction year={year} />

      <section>
        <UserForm user={user} setUser={setUser} />
      </section>

      <section>
        <DeviationFromMeanChart year={year} user={user} dimension="grossSalary" />
        <HistogramChart year={year} user={user} dimension="grossSalary" />
      </section>

      <section>
        <DeviationFromMeanChart year={year} user={user} dimension="age" />
        <HistogramChart year={year} user={user} dimension="grossSalary" filterDimension="age" />
      </section>

      <section>
        <DeviationFromMeanChart year={year} user={user} dimension="gender" />
        <HistogramChart year={year} user={user} dimension="grossSalary" filterDimension="gender" />
      </section>

      <section>
        <DeviationFromMeanChart year={year} user={user} dimension="experience" />
        <HistogramChart
          year={year}
          user={user}
          dimension="grossSalary"
          filterDimension="experience"
        />
      </section>

      <section>
        <DeviationFromMeanChart year={year} user={user} dimension="citizenship" />
        <HistogramChart
          year={year}
          user={user}
          dimension="grossSalary"
          filterDimension="citizenship"
        />
      </section>

      <section>
        <DeviationFromMeanChart year={year} user={user} dimension="education" />
        <HistogramChart
          year={year}
          user={user}
          dimension="grossSalary"
          filterDimension="education"
        />
      </section>

      <section>
        <DeviationFromMeanChart year={year} user={user} dimension="organizationType" />
        <HistogramChart
          year={year}
          user={user}
          dimension="grossSalary"
          filterDimension="organizationType"
        />
      </section>

      <section>
        <DeviationFromMeanChart year={year} user={user} dimension="industry" />
        <HistogramChart
          year={year}
          user={user}
          dimension="grossSalary"
          filterDimension="industry"
        />
      </section>

      <section>
        <DeviationFromMeanChart year={year} user={user} dimension="role" />
        <HistogramChart year={year} user={user} dimension="grossSalary" filterDimension="role" />
      </section>

      {/* <p>User info:</p>
        <pre>
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre> */}

      {/* <HistogramChart year={year} dimension="bonus" /> */}
      {/* <HistogramChart year={year} dimension="equity" /> */}
      {/* <ScatterChart year={year} dimensionX="hoursPerWeek" dimensionY="grossSalary" /> */}
    </main>
  );
}
