import styles from "./classes.module.css";
import Image from "next/image";
import Computer from "@/app/components/common/icons/computer";
import Clock from "@/app/components/common/icons/clock";
import Connection from "@/app/components/common/icons/connection";
import Home from "@/app/components/common/icons/home";
import Favourite from "@/app/components/common/icons/favourite";

const classesFeatures = [
  {
    title: "Онлайн и оффлайн",
    description: "Занятия доступны как онлайн, так и оффлайн в городе Бресте",
    icon: <Computer />
  },
  {
    title: "От 45 до 60 минут",
    description: "Каждое занятие длится от 45 до 60 минут, что позволяет сосредоточиться на эффективности и качестве работы",
    icon: <Clock />
  },
  {
    title: "Домашнее задание",
    description: "В конце каждого занятия дается индивидуальное домашнее задание, направленное на закрепление полученных навыков",
    icon: <Home />
  },
  {
    title: "Всегда на связи!",
    description: "Возможность в любой момент задать вопросы и получить разъяснения по пройденному материалу",
    icon: <Connection />
  },
  {
    title: "Индивидуальный подход",
    description: "к каждому случаю. Живое и неформальное общение.\n " +
      "Мы стараемся сделать процесс обучения максимально удобным и гибким, чтобы Вы могли эффективно работать над своей речью в подходящее для Вас время и в комфортном месте",
    icon: <Favourite />
  }
]

export default function Classes() {
  return (
    <div
      id="classes"
      className={styles.classes}
    >
      <div className={styles.widthWrapper}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>Как проходят занятия</h2>

          <ul className={styles.classFeatureList}>
            {
              classesFeatures.map((feature, index) => (
                <li
                  key={index}
                  className={styles.classFeatureItem}
                >
                  <div className={styles.classFeatureItem_title}>
                    <h3>{feature.title}</h3>
                    {feature.icon}
                  </div>
                  <p>{feature.description}</p>
                </li>
              ))
            }
          </ul>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/img/class.webp"
            alt="Занятия"
            width={400}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
