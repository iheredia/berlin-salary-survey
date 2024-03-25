"use client";
import { useState } from "react";
import ScatterChart from "@/components/charts/scatter-chart";
import styles from "./page.module.css";
import { getStats } from "@/data";
import HistogramChart from "@/components/charts/histogram-chart";
import UserForm, { User } from "@/components/user-form";

export default function Home() {
  const [user, setUser] = useState<User>({});
  const year = 2023;
  // const stats = getStats();
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
        <h3>How do you compare?</h3>

        <UserForm user={user} setUser={setUser} />

        <p>User info:</p>
        <pre>
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre>

        {/* <HistogramChart year={year} dimension="grossSalary" />

        <h2>Workig more pays more?</h2>
        <ScatterChart year={year} dimensionX="hoursPerWeek" dimensionY="grossSalary" /> */}
      </section>
    </main>
  );
}
