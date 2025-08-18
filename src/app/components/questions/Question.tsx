import Question from "@/app/data/model/Question";
import {useState} from "react";
import styles from "@/app/components/questions/questions.module.css";
import Expandable from "@/app/components/common/Expandable";
import Arrow from "@/app/components/common/icons/arrow";

interface QuestionProps {
  question: Question;
}

const QuestionView = ({ question }: QuestionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={`${styles.question} ${isOpen ? styles.open : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.question_title}>
        {question.title}
        <Arrow />
      </div>

      <Expandable
        isOpen={isOpen}
      >
        <div className={styles.question_answer}>
          {question.description}
        </div>
      </Expandable>
    </div>
  )
}

export default QuestionView;