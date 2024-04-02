import styles from "./comment.module.css";

export default function SalaryComment(props: { percentile: number }) {
  const { percentile } = props;
  const upperDifference = 100 - percentile;
  const comment =
    percentile < 20
      ? `😨 you are in the bottom range of salaries. ${upperDifference}% of people earn more than you in Berlin 💸`
      : percentile < 50
      ? `😕 you are not all the way at the bottom but there is a lot of room for improvement. ${upperDifference}% of people earn more than you`
      : percentile < 75
      ? `Not bad. You are in the upper range of salaries, earning more than ${percentile}% of people.`
      : percentile === 100
      ? "Oh wow. Are you sure you wrote that? You earn more than everyone who took the survey 😎"
      : `🥳 niiice. You are in the top range of salaries. Only ${upperDifference}% earn more than you 💰💰`;
  return <p className={styles.comment}>{comment}</p>;
}
