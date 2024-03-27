import Introduction from "@/components/introduction";
import Dashboard from "@/components/dashboard";
import SnapScroll from "@/components/layout/snap-scroll";
import styles from "./page.module.css";

export default function Home() {
  const year = 2023;

  return (
    <main className={styles.main}>
      <SnapScroll>
        <Introduction year={year} />
        <Dashboard year={year} />
      </SnapScroll>
    </main>
  );
}
