import { useContext } from "react";
import AppContext from "@/components/context";
import styles from "./salary-gradient.module.css";
import classNames from "classnames";

export default function SalaryGradientChart() {
  const { data, user } = useContext(AppContext);

  let tooltipStyle = {};
  let iconStyle = {};
  if (data.grossSalary) {
    const { percentile } = data.grossSalary;

    const iconLeft = `${percentile}%`;
    iconStyle = { left: iconLeft };

    tooltipStyle =
      percentile > 90
        ? { right: "-5px" }
        : percentile < 10
        ? { left: "-5px" }
        : { left: `${percentile}%`, transform: "translate(-50%)" };
  }

  const className = classNames(styles.gradientContainer, user.grossSalary ? "" : styles.hidden);
  return (
    <div className={className}>
      {data.grossSalary && (
        <>
          <div className={styles.tooltipContainer}>
            <span className={styles.tooltipIcon} style={iconStyle}></span>
            <span className={styles.tooltip} style={tooltipStyle}>
              You are here
            </span>
          </div>
          <div className={styles.gradient}></div>
          <span className={styles.referenceLeft}>Worst salaries</span>
          <span className={styles.referenceRight}>Best salaries</span>
        </>
      )}
    </div>
  );
}
