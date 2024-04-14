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
  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  );
}

export function Nowrap(props: { children: ReactNode }) {
  return <span className={styles.nowrap}>{props.children}</span>;
}

export function Strong(props: { children: ReactNode }) {
  return (
    <strong className={styles.strong}>
      <Nowrap>{props.children}</Nowrap>
    </strong>
  );
}
