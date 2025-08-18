import styles from "./prices.module.css"

export default function Prices() {
  return (
    <div
      id="prices"
      className={styles.prices}
    >
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Цены</h2>

        <div className={styles.priceItemsWrapper}>
          <div className={styles.priceItem}>
            <div className={styles.priceItem_titleWrapper}>
              <span className={styles.priceItem_title}>Занятие</span>
              <span className={styles.priceItem_description}>45 минут - 60 минут</span>
            </div>

            <div className={styles.priceItem_valuesWrapper}>
              <div className={styles.priceItem_valueWrapper}>
                <span className={styles.priceItem_value}>50</span>&nbsp;
                <span className={styles.priceItem_currency}>BYN</span>
              </div>

              <div className={styles.priceItem_additionalValueWrapper}>
                <span>( </span>
                <span className={styles.priceItem_additionalValue}>1500</span>&nbsp;
                <span className={styles.priceItem_additionalCurrency}>RUB</span>
                <span> )</span>
              </div>
            </div>
          </div>

          <div className={styles.priceItem}>
            <div className={styles.priceItem_titleWrapper}>
              <span className={styles.priceItem_title}>Логомассаж</span>
              <span className={styles.priceItem_description}></span>
            </div>

            <div className={styles.priceItem_valuesWrapper}>
              <div className={styles.priceItem_valueWrapper}>
                <span className={styles.priceItem_value}>40</span>&nbsp;
                <span className={styles.priceItem_currency}>BYN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}