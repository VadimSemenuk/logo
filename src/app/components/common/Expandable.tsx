import {ReactNode, useRef} from "react";
import styles from "@/app/components/questions/questions.module.css";

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
        transition: 'max-height 150ms linear',
        maxHeight: isOpen ? (root.current?.scrollHeight + "px") : '0px'
      }}
    >
      {children}
    </div>
  )
}

export default Expandable;