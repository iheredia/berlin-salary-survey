import { ReactNode } from "react";
import styles from "./base-comment.module.css";

export default function BaseComment(props: { children: ReactNode }) {
  return <div className={styles.comment}>{props.children}</div>;
}

export function Strong(props: { children: ReactNode }) {
  return <strong className={styles.strong}>{props.children}</strong>;
}
