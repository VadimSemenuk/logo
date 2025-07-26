"use client"

import styles from "./page.module.css";
import Main from "@/app/components/main/main";
import Questions from "@/app/components/questions/questions";
import Header from "@/app/components/header/header";
import Work from "@/app/components/work/work";
import About from "@/app/components/about/about";
import Classes from "@/app/components/classes/classes";
import Footer from "@/app/components/footer/footer";
import JsonLD from "@/app/components/common/JsonLD";

export default function Home() {
  return (
    <>
      <JsonLD />
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <Main />
        <Work />
        <Classes />
        <About />
        <Questions />
        <Footer />
      </div>
    </>
  );
}
