import { useState } from "react";
import styles from "./question.module.css";
import Expandable from "@/components/expandable/expandable";
import Arrow from "@/components/icons/arrow";
import { Question } from "../questions-data";
import classNames from "classnames";

interface QuestionProps {
  question: Question;
}

const QuestionView = ({ question }: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames(styles.question, isOpen ? styles.open : "")}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.question_title}>
        {question.title}
        <Arrow />
      </div>

      <Expandable isOpen={isOpen}>
        <div className={styles.question_answer}>{question.description}</div>
      </Expandable>
    </div>
  );
};

export default QuestionView;
