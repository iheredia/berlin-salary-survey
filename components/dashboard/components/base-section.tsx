import classNames from "classnames";
import styles from "./base-section.module.css";
import { useContext } from "react";
import AppContext from "@/components/context";

type BaseSectionProps = {
  children?: React.ReactNode;
};

export default function BaseSection(props: BaseSectionProps) {
  const { loading } = useContext(AppContext);
  const { children } = props;

  const sectionClassName = classNames(styles.section, loading ? styles.loading : null);

  return (
    <section className={sectionClassName}>
      <div className={styles.card}>{children}</div>
    </section>
  );
}
