import styles from "./questions.module.css";
import {QuestionRepository} from "@/app/data/repository/question.repository";
import QuestionView from "@/app/components/questions/Question";
import Image from "next/image";

export default function Questions() {
  return (
    <section
      id="questions"
      className={styles.questions}
    >
      <div className={styles.contentWrapper}>
        <Image
          className={styles.titleImg}
          src="/help.svg"
          alt="Часто задаваемые вопросы"
          width={0}
          height={0}
        />

        <span className={styles.title}>Часто задаваемые вопросы</span>

        <div>
          {
            QuestionRepository
              .get()
              .map((item) => (
                <QuestionView
                  key={item.title}
                  question={item}
                />
              ))
          }
        </div>
      </div>
    </section>
  );
}
