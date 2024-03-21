import ScatterChart from "@/components/scatter-chart";
import styles from "./page.module.css";
import { getStats } from "@/data";
import HistogramChart from "@/components/histogram-chart";

export default function Home() {
  const year = 2023;
  const stats = getStats();
  return (
    <main className={styles.main}>
      <section>
        <h1>Berlin salary survey {year}</h1>
        <p>
          The Handpicked salary survey for {year} had{" "}
          <strong>{stats.respondants} respondants</strong>
        </p>
        <p>
          Gross salaries go from <strong>€ {stats.minSalary}</strong> to a whopping{" "}
          <strong>€ {stats.maxSalary}</strong> a year
        </p>
        <HistogramChart year={year} dimension="grossSalary" />

        <h2>Workig more pays more?</h2>
        <ScatterChart year={year} dimensionX="hoursPerWeek" dimensionY="grossSalary" />
      </section>
    </main>
  );
}
