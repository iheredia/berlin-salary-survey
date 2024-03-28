import styles from "./base-section.module.css";

type BaseSectionProps = {
  children: React.ReactNode;
};

export default function BaseSection(props: BaseSectionProps) {
  return <section className={styles.section}>{props.children}</section>;
}
