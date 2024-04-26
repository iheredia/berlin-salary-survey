import AppContextElement from "./context/provider";
import Introduction from "./introduction";
import Dashboard from "./dashboard";
import Footer from "./footer";
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
    <AppContextElement year={year} embed={embed}>
      <main className={mainClassName}>
        {embed ? null : <Introduction year={year} />}
        <Dashboard />
        <Footer />
        <p className={styles.footerNote}>Last update: 26.04.2024</p>
        <p className={styles.footerNote}>
          Developed by{" "}
          <a href="https://github.com/iheredia" target="_blank">
            Ignacio Heredia
          </a>
        </p>
      </main>
    </AppContextElement>
  );
}
