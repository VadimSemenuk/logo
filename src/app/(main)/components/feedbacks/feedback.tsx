import styles from "./feedbacks.module.css";
import Image from "next/image";
import { useState } from "react";
import { Feedback } from "./feedbacks-data";

interface Props {
  item: Feedback;
}

export default function FeedbackView({ item }: Props) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className={`${styles.feedbackItem} card`}>
      {item.image && (
        <div className={styles.feedbackItem_imageWrapper}>
          <Image
            src={item.image}
            alt={item.name}
            width={200}
            height={200}
          />
        </div>
      )}

      {item.video && (
        <div className={styles.feedbackItem_videoWrapper}>
          <video
            src={item.video}
            controls={true}
            width={200}
            height={200}
            poster={item.videoPreview}
          />
        </div>
      )}

      <div className={styles.feedbackItem_text}>
        <div className={styles.feedbackItem_name}>{item.name}</div>

        <div className={styles.feedbackItem_title}>{item.title}</div>

        {!isExpanded && (
          <div className={styles.feedbackItem_description_short}>{item.description}</div>
        )}
        {isExpanded && <div className={styles.feedbackItem_description}>{item.description}</div>}

        {!isExpanded && (
          <div
            className={styles.feedbackItem_showMore}
            onClick={() => setIsExpanded(true)}
          >
            Показать больше
          </div>
        )}
        {isExpanded && (
          <div
            className={styles.feedbackItem_collapse}
            onClick={() => setIsExpanded(false)}
          >
            Свернуть
          </div>
        )}
      </div>
    </div>
  );
}
