import classNames from "classnames";
import styles from "./snap-scroll.module.css";

type SnapScrollContainerProps = {
  direction?: "vertical" | "horizontal";
  children: React.ReactNode;
};

export default function SnapScroll(props: SnapScrollContainerProps) {
  const className = classNames(
    styles.snapScroll,
    props.direction === "horizontal" ? styles.snapScrollHorizontal : styles.snapScrollVertical
  );
  return <section className={className}>{props.children}</section>;
}
