import styles from "./prices.module.css";
import classNames from "classnames";

export default function Prices() {
  const handleCallbackClick = () => {
    document.getElementById("callback")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="prices"
      className={styles.prices}
    >
      <div className="sectionTitleWrapper">
        <h2 className="title">Цены</h2>
      </div>

      <div className={styles.priceItemsWrapper}>
        <div className={classNames(styles.priceItem, "card")}>
          <span className={styles.priceItem_title}>Занятие</span>

          <div className={styles.priceItem_valuesWrapper}>
            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>60</span>&nbsp;
              <span className={styles.priceItem_currency}>BYN</span>
            </div>

            <div className={styles.priceItem_split}></div>

            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>1700</span>&nbsp;
              <span className={styles.priceItem_currency}>RUB</span>
            </div>
          </div>

          <button
            aria-label="получить консультацию"
            onClick={handleCallbackClick}
          >
            Получить консультацию
          </button>
        </div>

        <div className={classNames(styles.priceItem, "card")}>
          <span className={styles.priceItem_title}>Абонемент на 8 занятий</span>

          <div className={styles.priceItem_valuesWrapper}>
            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>55</span>&nbsp;
              <span className={styles.priceItem_currency}>BYN</span>
            </div>

            <div className={styles.priceItem_split}></div>

            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>1500</span>&nbsp;
              <span className={styles.priceItem_currency}>RUB</span>
            </div>
          </div>

          <div>440 BYN | 12000 RUB</div>

          <button
            aria-label="получить консультацию"
            onClick={handleCallbackClick}
          >
            Получить консультацию
          </button>
        </div>

        <div className={classNames(styles.priceItem, "card")}>
          <span className={styles.priceItem_title}>Логопедический массаж</span>

          <div className={styles.priceItem_valuesWrapper}>
            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>40</span>&nbsp;
              <span className={styles.priceItem_currency}>BYN</span>
            </div>
          </div>

          <button
            aria-label="получить консультацию"
            onClick={handleCallbackClick}
          >
            Получить консультацию
          </button>
        </div>
      </div>
    </div>
  );
}
