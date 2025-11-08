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
      <div>
        <div className={"card"}>
          <h1>
            Логопед
            <br /> для взрослых
            <br /> и подростков
          </h1>

          <h2 className={styles.description}>
            Индивидуальные занятия с логопедом <span>онлайн</span> по всему миру а так-же оффлайн в
            городе <span>Бресте</span>
          </h2>
        </div>

        <button
          className={styles.action}
          onClick={handleCallbackClick}
        >
          Получить консультацию
          <SouthEast />
        </button>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          loading="eager"
          rel="preload"
          src="/img/main.webp"
          alt="Логопед для взрослых и подростков"
          width={0}
          height={0}
          fetchPriority="high"
        />

        <div className={styles.personInfo}>
          <div className={styles.personInfo_title}>Майя Бабанова</div>
          <div className={styles.personInfo_description}>
            Более 4 лет помогаю взрослым достигать уверенности в своем голосе
          </div>
        </div>
      </div>
    </div>
  );
}
