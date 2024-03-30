import AppContextElement from "@/components/context/provider";
import Introduction from "@/components/introduction";
import Dashboard from "@/components/dashboard";
import styles from "./page.module.css";

export default function Home() {
  const year = 2023;

  return (
    <AppContextElement year={year}>
      <main className={styles.main}>
        <Introduction year={year} />
        <Dashboard />
      </main>
    </AppContextElement>
  );
}
