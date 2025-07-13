"use client"

import styles from "./page.module.css";
import Main from "@/app/components/main/main";
import Details from "@/app/components/details/details";
import Header from "@/app/components/header/header";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Main />
      <Details />
    </div>
  );
}
