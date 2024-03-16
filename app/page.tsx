import ScatterChart from "@/components/scatter-chart";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <h1>Berlin salary survey 2023</h1>

        {/* <p>Table of contents:</p>
        <ul>
          <li>
            What does it pay better?
            <ul>
              <li>Big or small companies?</li>
              <li>Remote or hybrid?</li>
              <li>Does citizenship matter?</li>
              <li>Does education matter?</li>
              <li>Which sector pays better? How about tech vs the rest of the sectors?</li>
              <li>More experience equals more money?</li>
              <li>Public or private sector?</li>
              <li>Individual contributor or manager?</li>
              <li>Jobs with bonuses have a lower base salary?</li>
              <li>Difference by seniority</li>
            </ul>
          </li>
          <li>How is the gender gap in Berlin?</li>
        </ul> */}

        <h2>Workig more pays more?</h2>
        <ScatterChart year={2023} dimensionX="hoursPerWeek" dimensionY="grossSalary" />
      </section>
    </main>
  );
}
