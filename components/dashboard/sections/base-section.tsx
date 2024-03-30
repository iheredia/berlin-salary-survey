import classNames from "classnames";
import styles from "./base-section.module.css";
import { useContext } from "react";
import AppContext from "@/components/context";

type BaseSectionProps = {
  children: React.ReactNode;
  fullHeight?: boolean;
};

export default function BaseSection(props: BaseSectionProps) {
  const { loading } = useContext(AppContext);
  const className = classNames(
    styles.section,
    props.fullHeight ? styles.sectionFullHeight : null,
    loading ? styles.loading : null
  );
  return (
    <section className={className}>
      <div className={styles.card}>{props.children}</div>
    </section>
  );
}
