import styles from "./header.module.css";

export default function Header() {
  const routes = [
    {
      path: "/",
      name: "Направления работы",
    },
    {
      path: "/",
      name: "Частые вопросы",
    },
    {
      path: "/",
      name: "Обо мне",
    },
    {
      path: "/",
      name: "Полезные материалы",
    },
  ]

  return (
    <header
      className={styles.header}
      style={{
        padding: '10px 40px',
        background: '#E9E3D0',
        display: 'flex',
        alignItems: ' center',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: '40px',
            fontWeight: 'bold',

          }}
        >LOGO ADULT</span>
      </div>

      <nav
        style={{
        }}
      >
        <ul
          style={{
            display: 'flex',
            gap: '20px'
          }}
        >
          {
            routes.map((route, i) => (<li key={i}>{route.name}</li>))
          }
        </ul>
      </nav>
    </header>
  );
}
