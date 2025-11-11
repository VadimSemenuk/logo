import styles from "./feedback.module.css";
import Image from "next/image";
import { Feedback } from "../feedbacks-data";

interface Props {
  item: Feedback;
  onShowMoreRequest(): void;
}

export default function FeedbackView({ item, onShowMoreRequest }: Props) {
  return (
    <div className={`${styles.feedbackItem} card`}>
      <div className={styles.decoration}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {item.image && !item.video && (
        <div className={styles.feedbackItem_imageWrapper}>
          <Image
            src={item.image.sm}
            alt={item.name}
            width={200}
            height={250}
          />
        </div>
      )}

      {item.video && (
        <div className={styles.feedbackItem_videoWrapper}>
          <video
            src={item.video}
            controls={true}
            width={200}
            height={250}
            preload="none"
            poster={item.image?.sm}
          />
        </div>
      )}

      <div className={styles.feedbackItem_text}>
        <div className={styles.feedbackItem_name}>{item.name}</div>

        <div className={styles.feedbackItem_title}>{item.title}</div>

        <div className={styles.feedbackItem_description_short}>{item.description}</div>

        <div className={styles.feedbackItem_showMoreWrapper}>
          <button
            aria-label="подробнее"
            onClick={onShowMoreRequest}
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}
