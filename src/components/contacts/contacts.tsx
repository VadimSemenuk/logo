import styles from "./contacts.module.css";
import Instagram from "@/components/icons/instagram";
import Telegram from "@/components/icons/telegram";
import Viber from "@/components/icons/viber";
import Email from "@/components/icons/email";
import { sendYandexEvent } from "@/components/seo/yandex";
import Whatsapp from "@/components/icons/whatsapp";

interface Contact {
  link: string;
  className: string;
  icon: React.ReactElement;
}

const contacts: Contact[] = [
  {
    link: "https://www.instagram.com/logo_adult",
    className: styles.instagram,
    icon: <Instagram />,
  },
  {
    link: "https://t.me/logo_adult",
    className: styles.telegram,
    icon: <Telegram />,
  },
  {
    link: "viber://chat?number=%2B375445931003",
    className: styles.viber,
    icon: <Viber />,
  },
  {
    link: "whatsapp://send?phone=%2B375445931003",
    className: styles.whatsapp,
    icon: <Whatsapp />,
  },
  {
    link: "mailto:babanovamaya@yandex.by",
    className: styles.email,
    icon: <Email />,
  },
];

export default function Contacts() {
  const handleClick = (event: React.MouseEvent<HTMLElement>, contact: Contact) => {
    event.preventDefault();
    sendYandexEvent("reachGoal", "1");
    window.open(contact.link, "_blank");
  };

  return (
    <div className={styles.contacts}>
      {contacts.map((contact) => (
        <a
          className={`${styles.contact} ${contact.className}`}
          key={contact.link}
          href={contact.link}
          target="_blank"
          aria-label={contact.link}
          onClick={(event) => handleClick(event, contact)}
        >
          {contact.icon}
        </a>
      ))}
    </div>
  );
}
