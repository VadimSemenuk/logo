import styles from "./work-areas.module.css";
import Image from "next/image";

const workAreas = [
  {
    title: "Постановка и коррекция звуков",
    description:
      "Работа с нарушениями произношения звуков, таких как «Р», «Ш», «С», проблемой замены «Ш» на «С» и так далее",
    image: "/img/work/1.webp",
  },
  {
    title: "Восстановление речи после инсульта и ЧМТ",
    description:
      "Восстановление утраченных речевых навыков после инсульта или черепно-мозговой травмы",
    image: "/img/work/3.webp",
  },
  {
    title: "Лечение заикания",
    description: "Работа направлена на расслабление и улучшение контроля за речевым процессом",
    image: "/img/work/5.webp",
  },
  {
    title: "Логопедический массаж",
    description: "Массаж для улучшения артикуляции, снятия напряжения и стимуляции речевых мышц",
    image: "/img/work/6.webp",
  },
];

export default function WorkAreas() {
  return (
    <div
      id="work"
      className={styles.work}
    >
      <div>
        <div></div>
        <h2 className={styles.title}>Направления работы</h2>
      </div>

      <ul className={styles.workList}>
        {workAreas.map((item, i) => (
          <li
            key={i}
            className={`${styles.workItem} card`}
          >
            {/*<div className={styles.workItem_imageWrapper}>*/}
            <Image
              src={item.image}
              alt={item.description}
              width={200}
              height={200}
            />
            {/*</div>*/}

            <div className={styles.workItem_contentWrapper}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
