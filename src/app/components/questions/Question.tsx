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
      className={`display-linebreak ${styles.question}`}
    >
      <div
        className='pointer'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 0',
          fontSize: '18px',
          fontWeight: '500',
          gap: '10px',
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question.title}

        <span
          style={{
            display: "inline-flex",
            transform: `rotate(${isOpen ? 90 : 0}deg)`,
            transition: 'all 150ms linear',
          }}
        >
          <Arrow />
        </span>
      </div>

      <Expandable
        isOpen={isOpen}
      >
        <div
          style={{
            paddingLeft: '10px',
            fontSize: '15px',
          }}
        >
          {question.description}
        </div>
      </Expandable>
    </div>
  )
}

export default QuestionView;