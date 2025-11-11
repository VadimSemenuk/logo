import styles from "./advantages.module.css";
import advantages from "./advantages-data";

export default function Advantages() {
  return (
    <div
      id="advantages"
      className={styles.advantages}
    >
      <div className="sectionTitleWrapper">
        <div className="name">[преимущества]</div>
        <h2 className="title">Почему Вам стоит работать со мной?</h2>
      </div>

      <ul className={styles.advantagesItems}>
        {advantages.map((advantage, index) => (
          <li
            key={index}
            className={`${styles.advantageItem} card`}
          >
            <div className={styles.advantageItem_counter}>[0{index + 1}]</div>

            <div className={styles.advantageItem_contentWrapper}>
              <h3 className={styles.advantageItem_title}>{advantage.name}</h3>
              <div className={styles.advantageItem_description}>{advantage.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
