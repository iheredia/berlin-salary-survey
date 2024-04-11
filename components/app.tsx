import AppContextElement from "./context/provider";
import Introduction from "./introduction";
import Dashboard from "./dashboard";
import { AvailableYear } from "@/data/types";
import styles from "./app.module.css";

type AppProps = {
  year: AvailableYear;
  embed: boolean;
};

export default function App(props: AppProps) {
  const { year, embed } = props;

  return (
    <AppContextElement year={year}>
      <main className={styles.main}>
        {embed ? null : <Introduction year={year} />}
        <Dashboard />
      </main>
    </AppContextElement>
  );
}
