import styles from "./main.module.css";
import Image from "next/image";
import SouthEast from "@/components/icons/south-east";

export default function Main() {
  const handleCallbackClick = () => {
    document.getElementById("callback")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="main"
      className={styles.main}
    >
      <div className={styles.topWrapper}>
        <div className={styles.textWrapper}>
          <div>
            <h1>
              Логопед
              <br /> для взрослых
              <br /> и подростков
            </h1>

            <h2 className={styles.description}>
              Индивидуальные занятия с логопедом <span className={styles.highlight}>онлайн</span> по
              всему миру и очно в городе <span className={styles.highlight}>Бресте</span>
            </h2>
          </div>

          <button
            className={styles.action}
            aria-label="получить консультацию"
            onClick={handleCallbackClick}
          >
            <span>Получить консультацию</span>
            <SouthEast />
          </button>
        </div>

        <div className={styles.offset}></div>

        <Image
          loading="eager"
          rel="preload"
          src="/img/main.webp"
          alt="Логопед для взрослых и подростков"
          width={0}
          height={0}
          fetchPriority="high"
        />
      </div>

      <div className={styles.bottomWrapper}>
        <div className={styles.name}>Майя Бабанова</div>
        <div className={styles.list}>
          <ul>
            <li>8+ лет в логопедии</li>
            <li>Магистр</li>
            <li>Преподаватель ВУЗа</li>
            <li>Непрерывное обучение самым современным методам работы</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
