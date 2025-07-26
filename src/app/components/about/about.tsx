import styles from "./about.module.css";
import Me from "@/app/components/about/me";
import Study from "@/app/components/about/study";
import {useState} from "react";

export default function About() {

  const [page, setPage] = useState(0);

  return (
    <section
      id="about"
      className={styles.about}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          transform: `translate(-${page * 100}%, 0)`,
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            width: '100%',
            flexShrink: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Me
            onStudyPageRequest={() => setPage(1)}
          />
        </div>
        <div
          style={{
            width: '100%',
            flexShrink: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Study
            onMePageRequest={() => setPage(0)}
          />
        </div>
      </div>
    </section>
  );
}
