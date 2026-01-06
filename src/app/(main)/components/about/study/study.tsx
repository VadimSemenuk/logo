import styles from "./study.module.css";
import Image from "next/image";
import classNames from "classnames";
import studyItems from "./study-data";

interface Props {
  onMePageRequest(): void;
}

export default function Study({ onMePageRequest }: Props) {
  const handleStudyItemClick = (item: string) => {
    window.open(item, "_blank");
  };

  return (
    <div className={classNames(styles.study, "card")}>
      <h2 className={styles.title}>Мои дипломы и сертификаты</h2>

      <div className={styles.openHelp}>[нажмите для увеличения]</div>

      <div className={styles.studyItems}>
        {studyItems.map((item, i) => (
          <div
            key={i}
            className={styles.studyItem}
            onClick={() => handleStudyItemClick(item.original)}
          >
            <Image
              src={item.original}
              alt={item.text || "сертификат о повышении квалификации"}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>

      <button
        style={{
          marginTop: "40px",
        }}
        aria-label="обо мне"
        onClick={onMePageRequest}
      >
        Обо мне
      </button>
    </div>
  );
}
