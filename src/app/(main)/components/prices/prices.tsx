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

      <div className={styles.wrapper}>
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
                <span className={styles.priceItem_value}>2000</span>&nbsp;
                <span className={styles.priceItem_currency}>RUB</span>
              </div>

              <div className={styles.priceItem_split}></div>

              <div className={styles.priceItem_valueWrapper}>
                <span className={styles.priceItem_value}>25</span>&nbsp;
                <span className={styles.priceItem_currency}>USD</span>
              </div>
            </div>

            <div>
              Стоимость выезда: от 30 BYN к стоимости занятия (в зависимости от километража).
            </div>

            <button
              aria-label="получить консультацию"
              onClick={handleCallbackClick}
            >
              Записаться
            </button>
          </div>

          <div className={classNames(styles.priceItem, styles.accent, "card")}>
            <span className={styles.priceItem_title}>Абонемент на 8 занятий</span>

            <div className={styles.priceItem_valuesWrapper}>
              <div className={styles.priceItem_valueWrapper}>
                <span className={styles.priceItem_value}>55</span>&nbsp;
                <span className={styles.priceItem_currency}>BYN</span>
              </div>

              <div className={styles.priceItem_split}></div>

              <div className={styles.priceItem_valueWrapper}>
                <span className={styles.priceItem_value}>1800</span>&nbsp;
                <span className={styles.priceItem_currency}>RUB</span>
              </div>

              <div className={styles.priceItem_split}></div>

              <div className={styles.priceItem_valueWrapper}>
                <span className={styles.priceItem_value}>23</span>&nbsp;
                <span className={styles.priceItem_currency}>USD</span>
              </div>
            </div>

            <div>
              Общая стоимость: <br /> 440 BYN | 14400 RUB | 184 USD
            </div>

            <button
              aria-label="получить консультацию"
              onClick={handleCallbackClick}
            >
              Записаться
            </button>
          </div>
        </div>
      </div>

      <div className={styles.priceItemsWrapper}>
        <div className={classNames(styles.priceItem, styles.priceItemSM, "card")}>
          <span className={styles.priceItem_title}>Логопедический массаж</span>

          <div className={styles.priceItem_valuesWrapper}>
            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>40</span>&nbsp;
              <span className={styles.priceItem_currency}>BYN</span>
            </div>
          </div>
        </div>

        <div className={classNames(styles.priceItem, styles.priceItemSM, "card")}>
          <span className={styles.priceItem_title}>Консультация</span>

          <div className={styles.priceItem_valuesWrapper}>
            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>90</span>&nbsp;
              <span className={styles.priceItem_currency}>BYN</span>
            </div>

            <div className={styles.priceItem_split}></div>

            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>3000</span>&nbsp;
              <span className={styles.priceItem_currency}>RUB</span>
            </div>

            <div className={styles.priceItem_split}></div>

            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>35</span>&nbsp;
              <span className={styles.priceItem_currency}>USD</span>
            </div>
          </div>
        </div>

        <div className={classNames(styles.priceItem, styles.priceItemSM, "card")}>
          <span className={styles.priceItem_title}>Супервизия</span>

          <div className={styles.priceItem_valuesWrapper}>
            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>130</span>&nbsp;
              <span className={styles.priceItem_currency}>BYN</span>
            </div>

            <div className={styles.priceItem_split}></div>

            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>3500</span>&nbsp;
              <span className={styles.priceItem_currency}>RUB</span>
            </div>

            <div className={styles.priceItem_split}></div>

            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>45</span>&nbsp;
              <span className={styles.priceItem_currency}>USD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
