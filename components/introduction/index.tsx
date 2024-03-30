import { AvailableYear } from "@/data/types";
import { lora } from "../fonts";
import styles from "./index.module.css";
import classNames from "classnames";

export default function Introduction(props: { year: AvailableYear }) {
  const { year } = props;
  return (
    <section className={styles.introduction}>
      <div className={classNames(styles.titleContainer, lora.className)}>
        <h1>
          <svg
            viewBox="0 0 68.98 38.88"
            y="0px"
            x="0px"
            id="Layer_1"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="15.51,38.88 0,38.88 22.45,0 37.96,0"></polygon>
            <polygon points="46.53,38.88 31.02,38.88 53.47,0 68.98,0"></polygon>
          </svg>
          Berlin salary survey {year}
        </h1>
        <h2>How are you paid?</h2>
      </div>
      <p>Welcome to the analysis of the {year} Handpicked Berlin Salary Survey.</p>
      <p>
        Here you can find general statistics of the survey with an interactive section to see{" "}
        <strong>how does your salary compare?</strong> against the survey.
      </p>
      <p>
        If it&apos;s your first time heare, try filling your data to compare yourself against the
        survey.
      </p>
    </section>
  );
}
