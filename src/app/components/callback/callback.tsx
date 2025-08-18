import styles from "./callback.module.css";
import Contacts from "@/app/components/common/contacts/contacts";
import CallbackForm from "@/app/components/callback/callback-form";
import SearchInsights from "@/app/components/common/icons/search-insights";
import Forum from "@/app/components/common/icons/forum";
import ListAlt from "@/app/components/common/icons/list-alt";

const freeConsultDescriptionItems = [
  {
    icon: <SearchInsights />,
    text: 'Я проведу первичную оценку речи и выявлю основные особенности и проблемы'
  },
  {
    icon: <Forum />,
    text: 'Мы обсудим ваш текущий уровень и поставим цели для дальнейшей работы'
  },
  {
    icon: <ListAlt />,
    text: 'Составим индивидуальный план работы, основанный на ваших потребностях и предпочтениях'
  }
]

export default function Callback() {
  return (
    <div
      id="callback"
      className={styles.callback}
    >
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>
          Бесплатная консультация
        </h2>

        <div className={styles.freeConsultDescription}>
          <div className={styles.freeConsultDescription_title}>
            Давайте начнем наше знакомство с бесплатной онлайн консультации
          </div>

          <ul className={styles.freeConsultDescription_items}>
            {
              freeConsultDescriptionItems.map((item, index) => (
                <li
                  key={index}
                  className={styles.freeConsultDescription_item}
                >
                  <div className={styles.freeConsultDescription_item_icon}>{item.icon}</div>
                  <div className={styles.freeConsultDescription_item_text}>{item.text}</div>
                </li>
              ))
            }
          </ul>
        </div>

        <div className={styles.contactsWrapper}>
          <span className={styles.contactsWrapper_title}>Вы можете связаться со мной одним из способов</span>
          <Contacts />
        </div>

        <div className={styles.callbackWrapper}>
          <span className={styles.callbackWrapper_title}>Или оставьте свои контактные данные и я обязательно Вам отвечу :)</span>
          <CallbackForm />
        </div>
      </div>
    </div>
  );
}
