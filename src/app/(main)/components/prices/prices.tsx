import styles from "./prices.module.css"

export default function Prices() {
  return (
    <div
      id="prices"
      className={styles.prices}
    >
      <h2 className={styles.title}>Цены</h2>

      <div className={styles.priceItemsWrapper}>
        <div className={styles.pricesGroup}>
          <div className={styles.priceItem}>
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
          </div>

          <div className={styles.priceItem}>
            <span className={styles.priceItem_title}>Абонемент <br /> на 8 занятий</span>

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
          </div>
        </div>

        <div className={styles.priceItem}>
          <span className={styles.priceItem_title}>Логопедический <br/> массаж</span>

          <div className={styles.priceItem_valuesWrapper}>
            <div className={styles.priceItem_valueWrapper}>
              <span className={styles.priceItem_value}>40</span>&nbsp;
              <span className={styles.priceItem_currency}>BYN</span>
            </div>
          </div>

          <div>Город Брест</div>
        </div>
      </div>
    </div>
  )
}