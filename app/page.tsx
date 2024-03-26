import styles from "./page.module.css";
import Introduction from "@/components/introduction";
import Dashboard from "@/components/dashboard";

export default function Home() {
  const year = 2023;

  return (
    <main className={styles.main}>
      <Introduction year={year} />
      <Dashboard year={year} />
    </main>
  );
}
