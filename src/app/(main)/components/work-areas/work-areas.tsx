import styles from "./work-areas.module.css";
import Image from "next/image";
import workAreas from "./work-areas-data";

export default function WorkAreas() {
  return (
    <div
      id="workAreas"
      className={styles.workAreas}
    >
      <div className="sectionTitleWrapper">
        <div className="name">[направления работы]</div>
        <h2 className="title">Помогаю с различными нарушениями речи</h2>
      </div>

      <ul className={styles.workList}>
        {workAreas.map((item, i) => (
          <li
            key={i}
            className={`${styles.workItem} card`}
          >
            {item.icon}

            <div className={styles.workItem_contentWrapper}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </li>
        ))}

        <li className={styles.workItemImage}>
          <Image
            src="/img/class.webp"
            alt="направления работы"
            width={300}
            height={300}
          />
        </li>
      </ul>
    </div>
  );
}
