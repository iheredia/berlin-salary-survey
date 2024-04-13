import { ReactNode } from "react";
import styles from "./base-comment.module.css";
import classNames from "classnames";

type BaseCommentProps = {
  children?: ReactNode;
  hidden?: boolean;
};
export default function BaseComment(props: BaseCommentProps) {
  const { children, hidden } = props;
  const className = classNames(styles.comment, hidden ? styles.hiddenComment : "");
  return <div className={className}>{children}</div>;
}

export function Strong(props: { children: ReactNode }) {
  return <strong className={styles.strong}>{props.children}</strong>;
}
