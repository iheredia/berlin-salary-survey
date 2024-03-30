import AppContextElement from "@/components/context/provider";
import Introduction from "@/components/introduction";
import Dashboard from "@/components/dashboard";
import SnapScroll from "@/components/layout/snap-scroll";
import styles from "./page.module.css";

export default function Home() {
  const year = 2023;

  return (
    <AppContextElement year={year}>
      <main className={styles.main}>
        <SnapScroll>
          <Introduction year={year} />
          <Dashboard />
        </SnapScroll>
      </main>
    </AppContextElement>
  );
}
