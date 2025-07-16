import styles from "./work.module.css";

export default function Work() {
  return (
    <div
      id="work"
      className={styles.work}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 'calc(100vh - 100px)',
        width: "100vw",
        background: "#E2E0C8", //oldlace darkkhaki
        scrollMarginTop: '100px',
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "800px",
        }}
      >
        <img
          src="/work.svg"
          style={{
            height: "200px",
            marginTop: '-40px',
          }}
        />

        <span
          style={{
            fontSize: "54px",
            marginBottom: '40px',
            textAlign: 'center'
          }}
        >
          Направления работы
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
              <li
                key={item}
              >
                <a
                  href=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: '5px',
                    padding: "10px 0",
                    fontSize: "20px",
                    fontWeight: 500,
                  }}
                >
                  <span>{item}</span>
                  <img width="18" src="/arrow_outward.svg" />
                </a>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#747474"
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto deserunt distinctio error, expedita fugiat fugit harum, ipsum iste itaque nam necessitatibus nemo nulla, perferendis porro quas quisquam repellendus rerum.
                </span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
