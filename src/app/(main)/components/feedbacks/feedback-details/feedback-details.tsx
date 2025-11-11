import styles from "./feedback-details.module.css";
import Image from "next/image";
import { Feedback } from "../feedbacks-data";

interface Props {
  item: Feedback;
}

export default function FeedbackDetails({ item }: Props) {
  return (
    <div className={styles.feedbackItem}>
      {item.image && !item.video && (
        <Image
          src={item.image.bg}
          alt={item.name}
          width={200}
          height={400}
        />
      )}

      {item.video && (
        <video
          src={item.video}
          controls={true}
          width={200}
          height={400}
          poster={item.image?.sm}
        />
      )}

      <div className={styles.feedbackItem_text}>
        <div className={styles.feedbackItem_name}>{item.name}</div>
        <div className={styles.feedbackItem_title}>{item.title}</div>
        <div className={styles.feedbackItem_description}>{item.description}</div>
      </div>
    </div>
  );
}
