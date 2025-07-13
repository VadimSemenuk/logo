import styles from "./details.module.css";

export default function Details() {
  return (
    <div
      id="details"
      className={styles.details}
      style={{
        height: "100vh",
        width: "100vw",
        background: "oldlace", //oldlace darkkhaki
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "50%",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "darkkhaki",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "50px",
              fontWeight: "900"
            }}
          >
            Направления работы:
          </span>
          <ul>
            {
              [
                "Коррекция звукопроизношения",
                "Постановка звука",
                "Восстановление речи после инсульта и черепно-мозговой травмы",
                "Ускоренная/замедленная речь",
                "Заикание",
              ].map((item) => (
                <li key={item}>
                  {item}
                  <a href="#"><img width="24" src="/social/youtube.svg" /></a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "50%",
          alignItems: "center",
          justifyContent: "space-around",
          background: 'beige',
          padding: '40px'
        }}
      >
        <div>
          <span
            style={{
              fontSize: "50px",
              fontWeight: "900"
            }}
          >
            Часто задаваемые вопросы:
          </span>
          <ul>

            {
              [
                "Можно ли поставить звук во взрослом возрасте?",
                "Сколько времени займет коррекция звукопроизношения?",
                "Сколько занятий в неделю необходимо?",
                "Сколько длится занятие?",
                "В чем заключается самостоятельная работа?",
                "Могу ли я задать вопрос, если столкнусь с трудностями при выполнении домашнего задания?",
              ].map((item) => (
                <li
                  key={item}
                  className="underline-hover pointer"
                >
                  <span>{item}</span>
                  <a href="#"><img width="24" src="/arrow_forward_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" /></a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
