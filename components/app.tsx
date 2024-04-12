import AppContextElement from "./context/provider";
import Introduction from "./introduction";
import Dashboard from "./dashboard";
import { AvailableYear } from "@/data/types";
import styles from "./app.module.css";
import classNames from "classnames";

type AppProps = {
  year: AvailableYear;
  embed: boolean;
};

export default function App(props: AppProps) {
  const { year, embed } = props;

  const mainClassName = classNames(styles.main, embed ? styles.embed : "");
  return (
    <AppContextElement year={year}>
      <main className={mainClassName}>
        {embed ? null : <Introduction year={year} />}
        <Dashboard />
      </main>
    </AppContextElement>
  );
}
