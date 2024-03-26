import { AvailableYear } from "@/data/types";

export default function Introduction(props: { year: AvailableYear }) {
  const { year } = props;
  return (
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
    </section>
  );
}
