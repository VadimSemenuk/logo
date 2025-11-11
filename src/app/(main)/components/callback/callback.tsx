import styles from "./callback.module.css";
import Contacts from "@/components/contacts/contacts";
import CallbackForm from "./callback-form/callback-form";
import classNames from "classnames";

export default function Callback() {
  return (
    <div
      id="callback"
      className={styles.callback}
    >
      <div className={classNames("sectionTitleWrapper", styles.sectionTitleWrapper)}>
        <h2 className="title">Получить консультацию</h2>
        <div className={classNames("description", styles.description)}>
          Задайте любой интересующий вопрос, используя мессенджеры или форму обратной связи
        </div>
      </div>

      <div className={classNames(styles.contentWrapper, "card")}>
        <div className={styles.contactsSection}>
          <div>Контакты</div>
          <Contacts />
        </div>

        <div className={styles.callbackFormSection}>
          <div>Или оставьте свои контактные данные, и я обязательно Вам отвечу :)</div>
          <CallbackForm />
        </div>
      </div>
    </div>
  );
}
