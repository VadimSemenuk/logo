import classNames from "classnames";
import styles from "./apps.module.css";
import SouthEast from "@/components/icons/south-east";

export default function Apps() {
  return (
    <div
      id="apps"
      className={styles.apps}
    >
      <div className="sectionTitleWrapper">
        <div className="name">[дополнительное направление]</div>
        <h2 className="title">Разработка собственных программных решений</h2>
      </div>

      <div className={classNames("description", styles.description)}>
        Принимаю участие в разработке собственных программных решений для логопедической терапии,
        которые применяются в реальной работе с клиентами. Они основаны на научных исследованиях, а
        так-же на большом опыте работы, который позволил выявить реальные потребности в работе над
        речью.
      </div>

      <div className={styles.appsList}>
        {[
          {
            title: "Delayed Auditory Feedback (DAF)",
            description:
              "Программный инструмент для терапии заикания на основе техники задержки слуховой обратной связи",
            link: "/apps/daf",
          },
          {
            title: "Frequency-Altered Auditory Feedback (FAF)",
            description:
              "Программный инструмент для терапии заикания на основе частотно-изменённой слуховой обратной связи",
            link: "/apps/faf",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={classNames(styles.app, "card")}
          >
            <div className={styles.app_content}>
              <a
                className={styles.app_title}
                href={item.link}
                target="_blank"
              >
                {item.title}
              </a>
              <div className={styles.app_description}>{item.description}</div>
            </div>
            <a
              href={item.link}
              target="_blank"
              className={classNames(styles.app_link, "button")}
              aria-label="подробнее"
            >
              <SouthEast />
            </a>
          </div>
        ))}
      </div>

      <div>
        Вы можете использовать эти решения как в рамках логопедической терапии, так и самостоятельно
        - для регулярной практики и поддержки речи в реальных ситуациях общения.
      </div>
    </div>
  );
}
