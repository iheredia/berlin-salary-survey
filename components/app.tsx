import AppContextElement from "./context/provider";
import Introduction from "./introduction";
import Dashboard from "./dashboard";
import styles from "./app.module.css";
import { AvailableYear } from "@/data/types";

type AppProps = {
  year: AvailableYear;
  embed: boolean;
};

export default function App(props: AppProps) {
  const { year, embed } = props;

  return (
    <AppContextElement year={year} embed={embed}>
      <main className={styles.main}>
        {embed ? null : <Introduction year={year} />}
        <Dashboard />
      </main>
    </AppContextElement>
  );
}
