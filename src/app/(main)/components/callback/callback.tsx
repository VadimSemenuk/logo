import styles from "./callback.module.css";
import Contacts from "@/components/contacts/contacts";
import classNames from "classnames";
import CallbackForm from "./callback-form/callback-form";

export default function Callback() {
  return (
    <div
      id="callback"
      className={styles.callback}
    >
      <h2 className={styles.title}>Вы можете задать любой интересующий вопрос</h2>

      <div className={classNames(styles.contentWrapper, 'card')}>
        <div className={styles.content_title_contacts}>Связаться со мной можно одном из способов</div>

        <div className={styles.contactsWrapper}>
          <Contacts />
        </div>

        <div className={styles.content_title_callback}>Или оставьте свои контактные данные и я обязательно Вам отвечу :)</div>

        <div className={styles.callbackWrapper}>
          <CallbackForm />
        </div>
      </div>
    </div>
  );
}
