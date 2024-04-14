import { FormEvent, FormEventHandler, ReactNode } from "react";
import styles from "./base-form.module.css";
import classNames from "classnames";

type BaseFormProps = {
  onSubmit?: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
  hasData: boolean;
};

export default function BaseForm(props: BaseFormProps) {
  const { onSubmit: extraOnSubmit, hasData, children } = props;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (extraOnSubmit) {
      extraOnSubmit(event);
    }
  };

  const formClassName = classNames(styles.form, hasData ? styles.formWithData : null);
  return (
    <form className={formClassName} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

type OptionsContainerProps = {
  children: ReactNode;
  rowMobile?: boolean;
};

export function OptionsContainer(props: OptionsContainerProps) {
  const className = classNames(
    styles.optionsContainer,
    props.rowMobile ? styles.optionsContainerRowMobile : styles.optionsContainerColumnMobile
  );
  return <div className={className}>{props.children}</div>;
}
