import styles from "./feedbacks.module.css";
import FeedbackView from "./feedback/feedback";
import { feedbacks } from "./feedbacks-data";
import classNames from "classnames";
import FeedbackDetails from "@/app/(main)/components/feedbacks/feedback-details/feedback-details";
import { useState } from "react";
import { Feedback } from "./feedbacks-data";
import ModalView from "@/components/modal/modal";

interface DetailsViewState {
  item: Feedback | null;
  isOpen: boolean;
}

export default function Feedbacks() {
  const [detailsViewState, setDetailsViewState] = useState<DetailsViewState>({
    item: null,
    isOpen: false,
  });

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div
      id="feedbacks"
      className={styles.feedbacks}
    >
      <div className="sectionTitleWrapper">
        <div className="name">[отзывы]</div>
        <h2 className="title">Отзывы и истории клиентов</h2>
      </div>

      <div className={styles.feedbacksList}>
        {feedbacks.slice(0, isExpanded ? feedbacks.length : 3).map((item, index) => (
          <FeedbackView
            key={index}
            item={item}
            onShowMoreRequest={() => setDetailsViewState({ item, isOpen: true })}
          />
        ))}

        <ModalView
          isOpen={detailsViewState.isOpen}
          onRequestClose={() => setDetailsViewState((state) => ({ ...state, isOpen: false }))}
        >
          {detailsViewState.item && <FeedbackDetails item={detailsViewState.item} />}
        </ModalView>

        <div className={classNames(styles.feedbackItemNotification, "card")}>
          <span>Благодарю каждого ученика за терпение, ответственность и доверие.</span>
          <br />
          <span>
            С нетерпением жду возможности поделиться вашим успешным результатом в нашем разделе
            отзывов!
          </span>
          <br />
          <span>🤍</span>
        </div>
      </div>

      <button
        style={{
          marginTop: "30px",
        }}
        aria-label="обо мне"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Свернуть" : "Показать все отзывы"}
      </button>
    </div>
  );
}
