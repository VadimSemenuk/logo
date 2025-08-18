import styles from "./main.module.css";
import Image from "next/image";
import Contacts from "@/app/components/common/contacts/contacts";

export default function Main() {

  const handleCallbackClick = () => {
    document.getElementById("callback")?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div
      id='main'
      className={styles.main}
    >
      <div className={styles.widthWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            loading="eager"
            rel="preload"
            src="/img/main.webp"
            alt="Логопед для взрослых"
            width={400}
            height={300}
            fetchPriority="high"
          />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.titleWrapper}>
            <h1>Логопед<br /> для взрослых</h1>
            <div className={styles.titleWrapper_name}>Майя Бабанова</div>
          </div>

          <h2 className={styles.description}>Индивидуальные занятия онлайн и оффлайн в городе Брест</h2>

          <div className={styles.connectionsWrapper}>
            <button onClick={handleCallbackClick}>
              Получить бесплатную консультацию
            </button>
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  );
}
