import { FormEventHandler, ReactNode } from "react";
import styles from "./base-form.module.css";
import classNames from "classnames";

type BaseFormProps = {
  onSubmit?: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
  hasData: boolean;
};

export default function BaseForm(props: BaseFormProps) {
  const { onSubmit, hasData, children } = props;
  const formClassName = classNames(styles.form, hasData ? styles.formWithData : null);
  return (
    <form className={formClassName} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

type OptionsContainerProps = {
  children: ReactNode;
};

export function OptionsContainer(props: OptionsContainerProps) {
  return <div className={styles.optionsContainer}>{props.children}</div>;
}
