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
import Callback from "@/app/components/callback/callback";
import Prices from "@/app/components/prices/prices";
import useScrollToSection from "@/app/utils/useScrollToSection";
import Feedbacks from "@/app/components/feedbacks/feedbacks";
import Advantages from "@/app/components/advantages/advantages";

export default function Home() {

  useScrollToSection();

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
        <Advantages />
        <Prices />
        <Callback />
        <Feedbacks />
        <Questions />
        <About />
        <Footer />
      </div>
    </>
  );
}
