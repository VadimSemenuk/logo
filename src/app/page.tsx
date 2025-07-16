"use client"

import styles from "./page.module.css";
import Main from "@/app/components/main/main";
import Questions from "@/app/components/questions/questions";
import Header from "@/app/components/header/header";
import Work from "@/app/components/work/work";
import About from "@/app/components/about/about";

export default function Home() {
  return (
    <div className={styles.main}>
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '100px',
          zIndex: 1,
        }}
      >
        <Header />
      </div>
      <div style={{ paddingTop: "100px" }}>
        <Main />
        <Work />
        <Questions />
        <About />
      </div>
    </div>
  );
}
