import styles from "./feedbacks.module.css";
import Feedback from "./feedback";
import {feedbacks} from "./feedbacks-data";

export default function Feedbacks() {
  return (
    <div
      id="feedbacks"
      className={styles.feedbacks}
    >
      <h2 className={styles.title}>Отзывы и истории клиентов</h2>

      <div className={styles.feedbacksList}>
        {
          feedbacks.map((item, index) => (
            <Feedback
              key={index}
              item={item}
            />
          ))
        }
      </div>


      <div className={styles.feedbacksFooter}>
        <span>
          Благодарю каждого ученика за терпение, ответственность и доверие
        </span>
        <br />
        <span>
          С нетерпением жду возможности поделиться вашим успешным результатом в нашем разделе отзывов!❤️
        </span>
      </div>
    </div>
  );
}
