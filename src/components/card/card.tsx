import styles from './card.module.css'
import {ReactNode} from "react";

interface Props {
  children?: ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className={styles.card}>
      {children}
    </div>
  )
}