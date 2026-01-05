import styles from "./main.module.css";
import Image from "next/image";
import SouthEast from "@/components/icons/south-east";
import classNames from "classnames";

export default function Main() {
  return (
    <div
      id="main"
      className={styles.main}
    >
      <div className={styles.textWrapper}>
        <div>
          <h1>
            <strong>FAF</strong> - терапия заикания
          </h1>

          <h2 className={styles.description}>
            Frequency-Altered Auditory Feedback (FAF) - техника слуховой обратной связи c изменённой
            частотой - замедляет вашу речь, чтобы вы могли говорить&nbsp;
            <span className={styles.highlight}>четко и плавно</span>
          </h2>
        </div>

        <div className={styles.links}>
          <a
            href="https://play.google.com/store/apps/details?id=com.pragmatsoft.faf"
            target="_blank"
            className={styles.link}
          >
            <Image
              src="/img/google_play.svg"
              alt="google play"
              width={0}
              height={0}
            />
          </a>

          <a
            href="https://faf.logoadult.by/"
            target="_blank"
            className={classNames(styles.browserVersion, styles.link, "button")}
          >
            <span className={styles.browserVersion_content}>
              <span className={styles.browserVersion_content_title}>Онлайн версия</span>
              <br />
              <span className={styles.browserVersion_content_description}>Работает в браузере</span>
            </span>

            <SouthEast />
          </a>
        </div>
      </div>

      <div className={styles.offset}></div>

      <Image
        className={styles.mainImg}
        loading="eager"
        rel="preload"
        src="/img/faf.webp"
        alt="FAF - тренировка плавности речи"
        width={0}
        height={0}
        fetchPriority="high"
      />
    </div>
  );
}
