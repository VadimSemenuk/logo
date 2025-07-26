import styles from "./footer.module.css";
import Contacts from "@/app/components/common/contacts/contacts";

export default function Footer() {
  return (
    <footer
      id="footer"
      className={styles.footer}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.contactsWrapper}>
          <Contacts/>
        </div>
        <div className={styles.addressWrapper}>
          <address>
            Грюнвальдская улица, 12А<br/>
            Брест, Брестская область, 224033<br/>
            Республика Беларусь
          </address>
          <a href="tel:+375445931003">+375 (44) 593-10-03</a>
        </div>
      </div>
    </footer>
  );
}
