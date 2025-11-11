"use client";

import styles from "./footer.module.css";
import Contacts from "@/components/contacts/contacts";
import Arrow from "@/components/icons/arrow";

export default function Footer() {
  const handleUpClick = () => {
    document.getElementById("main")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className={styles.footer}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.credentialsWrapper}>
          <div className={styles.contactsWrapper}>
            <Contacts />
          </div>

          <div className={styles.credentialItem}>
            <div className={styles.credentialItem_title}>ФИО</div>
            <span className={styles.credentialItem_value}>Бабанова Майя Игоревна</span>
          </div>

          <div className={styles.credentialItem}>
            <div className={styles.credentialItem_title}>Адрес</div>
            <address className={styles.credentialItem_value}>
              <a
                className="undecorated"
                href="https://yandex.by/maps/-/CHTtzSYw"
                aria-label="адрес"
              >
                Грюнвальдская улица, 12А
                <br />
                Брест, Брестская область, 224033
                <br />
                Республика Беларусь
              </a>
            </address>
          </div>

          <div className={styles.credentialItem}>
            <div className={styles.credentialItem_title}>Телефон</div>
            <div className={styles.credentialItem_value}>
              <a
                className="undecorated"
                href="tel:+375445931003"
                aria-label="телефон"
              >
                +375 (44) 593-10-03
              </a>
            </div>
          </div>

          <div className={styles.credentialItem}>
            <div className={styles.credentialItem_title}>Реквизиты</div>
            <div className={styles.credentialItem_value}>УНП BE7699784</div>
          </div>
        </div>

        <div className={styles.rightWrapper}>
          <button
            className={styles.buttonUp}
            onClick={handleUpClick}
            aria-label="вверх"
          >
            <Arrow />
          </button>

          <div className={styles.dataProcessingWrapper}>
            <a
              className="undecorated"
              href="https://docs.google.com/document/d/1e9TWDvQ4PhZ5UTQhBLbYpbZXT-Bt0zu85dMAWtzXlXs/edit?usp=sharing"
              target="_blank"
              aria-label="политика обработки данных"
            >
              Политика обработки данных
            </a>

            <a
              className="undecorated"
              href="https://docs.google.com/document/d/1WtgFg9i5rUWQKTIjwsoryWTCNOr8Ji7MsDOZfUvRND4/edit?usp=sharing"
              target="_blank"
              aria-label="публичная оферта на предоставление услуг"
            >
              Публичная оферта на предоставление услуг
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
