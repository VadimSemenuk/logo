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
      <div className={classNames(styles.contentWrapper, "card")}>
        <div className={styles.questionsWrapper}>
          {questions.map((question, index) => (
            <QuestionView
              key={index}
              question={question}
            />
          ))}
        </div>
      </div>

      <div className={classNames("sectionTitleWrapper", styles.sectionTitleWrapper)}>
        <h2 className="title">Часто задаваемые вопросы</h2>
      </div>
    </div>
  );
}
