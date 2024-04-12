import { useContext } from "react";
import AppContext from "@/components/context";
import styles from "./gradient.module.css";

export default function GradientChart() {
  const { data } = useContext(AppContext);
  if (!data.grossSalary) return;

  const { percentile } = data.grossSalary;

  const iconLeft = `${percentile}%`;
  const iconStyle = { left: iconLeft };

  const tooltipStyle =
    percentile > 90
      ? { right: "-5px" }
      : percentile < 10
      ? { left: "-5px" }
      : { left: `${percentile}%`, transform: "translate(-50%)" };

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
