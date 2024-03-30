import classNames from "classnames";
import styles from "./base-section.module.css";
import { useContext } from "react";
import AppContext from "@/components/context";

type BaseSectionProps = {
  children: React.ReactNode;
  fullHeight?: boolean;
  part?: "top" | "center" | "bottom";
};

export default function BaseSection(props: BaseSectionProps) {
  const { loading } = useContext(AppContext);
  const { children, fullHeight, part } = props;

  const partClassName = classNames(
    part === "top" ? styles.topPart : "",
    part === "center" ? styles.centerPart : "",
    part === "bottom" ? styles.bottomPart : ""
  );

  const sectionClassName = classNames(
    styles.section,
    fullHeight ? styles.sectionFullHeight : null,
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
