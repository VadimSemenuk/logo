import styles from "./questions.module.css";
import {ReactNode, useRef, useState} from "react";
import Question from "@/app/data/model/Question";
import {QuestionRepository} from "@/app/data/repository/question.repository";

interface ExpandableProps {
  children?: ReactNode;
  isOpen: boolean;
}

const Expandable = ({ children, isOpen }: ExpandableProps) => {
  const root = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={root}
      className={styles.content}
      style={{
        overflow: 'hidden',
        transition: 'max-height 200ms linear',
        maxHeight: isOpen ? (root.current?.scrollHeight + "px") : '0px'
      }}
    >
      {children}
    </div>
  )
}

interface QuestionProps {
  question: Question;
}

const QuestionView = ({ question }: QuestionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className='display-linebreak'
      style={{
        borderBottom: '1px solid #1b1818',
      }}
    >
      <div
        className='pointer'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 0',
          fontSize: '20px',
          fontWeight: '500',
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question.title}

        <img
          style={{
            transform: `rotate(${isOpen ? 90 : 0}deg)`,
            transition: 'all 100ms linear',
          }}
          width={20}
          src="/arrow_forward_ios.svg"
          alt=""
        />
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

export default function Questions() {

  return (
    <div
      id="questions"
      className={styles.work}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // minHeight: 'calc(100vh - 100px)',
        width: "100vw",
        background: "ivory", //oldlace darkkhaki ivory khaki 839788
        scrollMarginTop: '100px',
        padding: "80px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "900px",
        }}
      >
        <img
          src="/help.svg"
          style={{
            height: "200px",
            marginTop: '-20px',
          }}
        />

        <span
          style={{
            fontSize: "54px",
            marginBottom: '40px',
            textAlign: 'center'
          }}
        >
          Часто задаваемые вопросы:
        </span>

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
    </div>
  );
}
