import styles from "./comment.module.css";

export default function SalaryComment(props: { percentile: number }) {
  const { percentile } = props;
  const upperDifference = 100 - percentile;

  if (percentile < 20) {
    return (
      <div className={styles.comment}>
        😨 you are in the bottom range of salaries. {upperDifference}% of people earn more than you
        in Berlin 💸
      </div>
    );
  }
  if (percentile < 50) {
    return (
      <div className={styles.comment}>
        😕 you are not all the way at the bottom but there is a lot of room for improvement.{" "}
        {upperDifference}% of people earn more than you
      </div>
    );
  }
  if (percentile < 75) {
    return (
      <div className={styles.comment}>
        Not bad 🤑. You are in the upper range of salaries, earning more than {percentile}% of
        people.
      </div>
    );
  }
  if (percentile < 100) {
    return (
      <div className={styles.comment}>
        🥳 niiice. You are in the top range of salaries. Only {upperDifference}% of people earn more
        than you 💰💰
      </div>
    );
  }
  return (
    <div className={styles.comment}>
      Oh wow. Are you sure you wrote that? You earn more than everyone who took the survey 😎
    </div>
  );
}
