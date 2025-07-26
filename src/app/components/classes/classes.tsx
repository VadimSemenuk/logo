import styles from "./classes.module.css";
import Image from "next/image";

const classesFeatures = [
  {
    title: "Формат",
    description: "Занятия доступны как онлайн (на платформе Zoom с видеосвязью), так и оффлайн в Бресте",
  },
  {
    title: "Длительность",
    description: "Каждое занятие длится от 45 до 60 минут, что позволяет сосредоточиться на эффективности и качестве работы",
  },
  {
    title: "Домашнее задание",
    description: "В конце каждого занятия дается индивидуальное домашнее задание, направленное на закрепление и развитие полученных навыков",
  },
  {
    title: "Всегда на связи!",
    description: "Возможность в любой момент задать вопросы и получить разъяснения по пройденному материалу",
  },
  {
    title: "Индивидуальный подход",
    description: "к каждому случаю. Живое и неформальное общение.\n " +
      "Мы стараемся сделать процесс обучения максимально удобным и гибким, чтобы вы могли эффективно работать над своим развитием в удобное для вас время и месте",
  }
]

export default function Classes() {
  return (
    <section
      id="classes"
      className={styles.classes}
    >

      <div className={styles.contentWrapper}>
        <span className={styles.title}>Как проходят занятия</span>

        <div className={styles.content}>
          <ul>
            {
              classesFeatures.map((feature, index) => (
                <li
                  key={index}
                  className={styles.classFeatureItem}
                >
                  <h2>{feature.title}</h2>
                  <p>{feature.description}</p>
                </li>
              ))
            }
          </ul>

          <div className={styles.imgWrapper}>
            <Image
              src="/classes.webp"
              alt="Занятия"
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
