import styles from "./prices.module.css";
import classNames from "classnames";

export default function Prices() {
  const handleCallbackClick = () => {
    document.getElementById("callback")?.scrollIntoView({ behavior: "smooth" });
  };

  const prices = {
    byn: {
      oneTime: 60,
      subscriptionOneTime: 55,
      subscriptionFull: 440,
      consultation: 100,
      supervision: 150,
    },
    rub: {
      oneTime: 2200,
      subscriptionOneTime: 2000,
      subscriptionFull: 16000,
      consultation: 3500,
      supervision: 4000,
    },
    usd: {
      oneTime: 30,
      subscriptionOneTime: 25,
      subscriptionFull: 200,
      consultation: 50,
      supervision: 60,
    },
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
                <span className={styles.priceItem_value}>{prices.byn.oneTime}</span>&nbsp;
                <span className={styles.priceItem_currency}>BYN</span>
              </div>

              <div className={styles.priceItem_split}></div>

              <div className={styles.priceItem_valueWrapper}>
                <span className={styles.priceItem_value}>{prices.rub.oneTime}</span>&nbsp;
                <span className={styles.priceItem_currency}>RUB</span>
              </div>

              <div className={styles.priceItem_split}></div>

              <div className={styles.priceItem_valueWrapper}>
                <span className={styles.priceItem_value}>{prices.usd.oneTime}</span>&nbsp;
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
                <span className={styles.priceItem_value}>{prices.byn.subscriptionOneTime}</span>
                &nbsp;
                <span className={styles.priceItem_currency}>BYN</span>
              </div>

              <div className={styles.priceItem_split}></div>

              <div className={styles.priceItem_valueWrapper}>
                <span className={styles.priceItem_value}>{prices.rub.subscriptionOneTime}</span>
                &nbsp;
                <span className={styles.priceItem_currency}>RUB</span>
              </div>

              <div className={styles.priceItem_split}></div>

              <div className={styles.priceItem_valueWrapper}>
                <span className={styles.priceItem_value}>{prices.usd.subscriptionOneTime}</span>
                &nbsp;
                <span className={styles.priceItem_currency}>USD</span>
              </div>
            </div>

            <div>
              Общая стоимость: <br /> {prices.byn.subscriptionFull} BYN |{" "}
              {prices.rub.subscriptionFull} RUB | {prices.usd.subscriptionFull} USD
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
          <span className={styles.priceItem_title}>Консультация</span>

          <div className={styles.priceItem_valuesWrapper}>
            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>{prices.byn.consultation}</span>&nbsp;
              <span className={styles.priceItem_currency}>BYN</span>
            </div>

            <div className={styles.priceItem_split}></div>

            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>{prices.rub.consultation}</span>&nbsp;
              <span className={styles.priceItem_currency}>RUB</span>
            </div>

            <div className={styles.priceItem_split}></div>

            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>{prices.usd.consultation}</span>&nbsp;
              <span className={styles.priceItem_currency}>USD</span>
            </div>
          </div>
        </div>

        <div className={classNames(styles.priceItem, styles.priceItemSM, "card")}>
          <span className={styles.priceItem_title}>Супервизия</span>

          <div className={styles.priceItem_valuesWrapper}>
            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>{prices.byn.supervision}</span>&nbsp;
              <span className={styles.priceItem_currency}>BYN</span>
            </div>

            <div className={styles.priceItem_split}></div>

            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>{prices.rub.supervision}</span>&nbsp;
              <span className={styles.priceItem_currency}>RUB</span>
            </div>

            <div className={styles.priceItem_split}></div>

            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>{prices.usd.supervision}</span>&nbsp;
              <span className={styles.priceItem_currency}>USD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
