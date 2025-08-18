import styles from "./work.module.css";
import Image from "next/image";

const work = [
  {
    title: "Коррекция звукопроизношения",
    description:
      "Работа с нарушениями произношения отдельных звуков, таких как «Ш», «С», «Р», проблемой замены «Ш» на «С» и так далее",
    image: "/img/work/1.png"
  },
  {
    title: "Постановка звука",
    description: "Помощь в постановке конкретных звуков, например, постановка звука «Р» или «Л»",
    image: "/img/work/2.png"
  },
  {
    title: "Восстановление речи после инсульта и ЧМТ",
    description: "Восстановление утраченных речевых навыков после инсульта или черепно-мозговой травмы",
    image: "/img/work/3.png"
  },
  {
    title: "Лечение заикания",
    description: "Работа направлена на расслабление и улучшение контроля за речевым процессом",
    image: "/img/work/5.png"
  },
  {
    title: "Ускоренная/замедленная речь",
    description: "Коррекция нарушений темпа речи и улучшение ее выразительности",
    image: "/img/work/4.png"
  },
  {
    title: "Логопедический массаж",
    description: "Массаж для улучшения артикуляции, снятия напряжения и стимуляции речевых мышц",
    image: "/img/work/6.png"
  }
]

export default function Work() {
  return (
    <div
      id="work"
      className={styles.work}
    >
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Направления работы</h2>

        <ul className={styles.workList}>
          {
            work.map((item, i) => (
              <li
                key={i}
                className={styles.workItem}
              >
                <div className={styles.workItem_contentWrapper}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className={styles.workItem_imageWrapper}>
                  <Image
                    src={item.image}
                    alt="logo"
                    width={200}
                    height={200}
                  />
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
