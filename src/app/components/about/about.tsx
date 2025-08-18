import styles from "./about.module.css";
import Me from "@/app/components/about/me";
import Study from "@/app/components/about/study";
import {useState} from "react";

export default function About() {

  const [page, setPage] = useState(0);

  return (
    <div
      id="about"
      className={styles.about}
    >
      <div
        className={styles.slider}
        style={{
          transform: `translate(-${page * 100}%, 0)`,
        }}
      >
        <div className={styles.sliderItem}>
          <Me
            onStudyPageRequest={() => setPage(1)}
          />
        </div>
        <div className={styles.sliderItem}>
          <Study
            onMePageRequest={() => setPage(0)}
          />
        </div>
      </div>
    </div>
  );
}
