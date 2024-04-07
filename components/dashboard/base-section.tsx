import classNames from "classnames";
import styles from "./base-section.module.css";
import { useContext } from "react";
import AppContext from "@/components/context";

type BaseSectionProps = {
  children?: React.ReactNode;
  part?: "top" | "center" | "bottom";
};

export default function BaseSection(props: BaseSectionProps) {
  const { loading } = useContext(AppContext);
  const { children, part } = props;

  const partClassName = classNames(
    part === "top" ? styles.topPart : "",
    part === "center" ? styles.centerPart : "",
    part === "bottom" ? styles.bottomPart : ""
  );

  const sectionClassName = classNames(
    styles.section,
    loading ? styles.loading : null,
    partClassName
  );

  const cardClassName = classNames(styles.card, partClassName);

  return (
    <section className={sectionClassName}>
      <div className={cardClassName}>{children}</div>
    </section>
  );
}
