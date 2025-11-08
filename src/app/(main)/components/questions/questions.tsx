import styles from "./questions.module.css";
import { questions } from "@/app/(main)/components/questions/questions-data";
import QuestionView from "./question/question";
import classNames from "classnames";

export default function Questions() {
  return (
    <div
      id="questions"
      className={styles.questions}
    >
      <h2 className={styles.title}>Часто задаваемые вопросы</h2>

      <div className={classNames(styles.contentWrapper, "card card-outline")}>
        <div className={styles.questionsWrapper}>
          {questions.map((question, index) => (
            <QuestionView
              key={index}
              question={question}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
