import styles from "./gradient.module.css";

export default function GradientChart(props: { userPercentile: number }) {
  const { userPercentile } = props;

  const iconLeft = `${userPercentile}%`;
  const iconStyle = { left: iconLeft };

  const tooltipLeft = `${userPercentile}%`;
  const tooltipStyle =
    userPercentile > 90
      ? { right: "-15px" }
      : userPercentile < 10
      ? { left: "-15px" }
      : { left: `${userPercentile}%`, transform: "translate(-50%)" };

  return (
    <div className={styles.gradientContainer}>
      <div className={styles.tooltipContainer}>
        <span className={styles.tooltipIcon} style={iconStyle}></span>
        <span className={styles.tooltip} style={tooltipStyle}>
          You are here
        </span>
      </div>
      <div className={styles.gradient}></div>
      <span className={styles.referenceLeft}>Worst salaries</span>
      <span className={styles.referenceRight}>Best salaries</span>
    </div>
  );
}
