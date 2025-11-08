import styles from "./about.module.css";
import { useState } from "react";
import Me from "@/app/(main)/components/about/me/me";
import Study from "@/app/(main)/components/about/study/study";

export default function About() {
  const [page, setPage] = useState(0);

  return (
    <div
      id="about"
      className={styles.about}
    >
      <h2 className={styles.title}>Обо мне</h2>

      <div
        className={styles.slider}
        style={{
          transform: `translate(-${page * 100}%, 0)`,
        }}
      >
        <div className={styles.sliderItem}>
          <Me onStudyPageRequest={() => setPage(1)} />
        </div>
        <div className={styles.sliderItem}>
          <Study onMePageRequest={() => setPage(0)} />
        </div>
      </div>
    </div>
  );
}
