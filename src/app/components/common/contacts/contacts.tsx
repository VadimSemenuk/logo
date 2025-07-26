import styles from "./contacts.module.css";
import Instagram from "@/app/components/common/icons/instagram";
import Telegram from "@/app/components/common/icons/telegram";
import Viber from "@/app/components/common/icons/viber";
import Email from "@/app/components/common/icons/email";

const contacts = [
  {
    link: 'https://www.instagram.com/logo_adult',
    image: '/social/instagram.svg',
    className: styles.instagram,
    icon: <Instagram />,
  },
  {
    link: 'https://t.me/maya_babanova',
    image: '/social/telegram.svg',
    className: styles.telegram,
    icon: <Telegram />,
  },
  {
    link: 'viber://chat?number=%2B375445931003',
    image: '/social/viber.svg',
    className: styles.viber,
    icon: <Viber />,
  },
  {
    link: 'babanovamaya@yandex.by',
    image: '/social/email.svg',
    className: styles.email,
    icon: <Email />,
  }
]

export default function Contacts() {
  return (
      <div className={styles.contacts}>
        {
          contacts.map(contact => (
            <a
              className={`${styles.contact} ${contact.className}`}
              key={contact.link}
              href={contact.link}
              target="_blank"
            >
              {contact.icon}
            </a>
          ))
        }
      </div>
  );
}
