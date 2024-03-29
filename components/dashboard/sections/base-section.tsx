import classNames from "classnames";
import styles from "./base-section.module.css";

type BaseSectionProps = {
  children: React.ReactNode;
  fullHeight?: boolean;
};

export default function BaseSection(props: BaseSectionProps) {
  const className = classNames(styles.section, props.fullHeight ? styles.sectionFullHeight : null);
  return (
    <section className={className}>
      <div className={styles.card}>{props.children}</div>
    </section>
  );
}
