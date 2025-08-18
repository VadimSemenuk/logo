import styles from "./questions.module.css";
import {QuestionRepository} from "@/app/data/repository/question.repository";
import QuestionView from "@/app/components/questions/Question";

export default function Questions() {
  return (
    <div
      id="questions"
      className={styles.questions}
    >
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Часто задаваемые вопросы</h2>

        <div className={styles.questionsWrapper}>
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
    </div>
  );
}
