import styles from "./header.module.css";

export default function Header() {
  const routes = [
    {
      path: "work",
      name: "Направления работы",
    },
    {
      path: "questions",
      name: "Частые вопросы",
    },
    {
      path: "about",
      name: "Обо мне",
    },
    {
      path: "study",
      name: "Полезные материалы",
    },
  ]

  const handleNavClick = (path: string) => {
    document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header
      className={styles.header}
      style={{
        padding: '30px',
        height: '100%',
        display: 'flex',
        alignItems: ' center',
        justifyContent: 'space-between',
        background: '#bfc0b2',
      }}
    >
      <div
        style={{
          flexShrink: 0,
        }}
      >
        <span
          className='pointer'
          style={{
            fontSize: '40px',
            fontWeight: '500',
            fontFamily: 'Alumni Sans SC, sans-serif'
          }}
          onClick={() => handleNavClick('main')}
        >
          <span style={{ color: "#607D8B" }}>LOGO</span>&nbsp;
          <span style={{ color: "#795548" }}>ADULT</span>
        </span>
      </div>

      <nav
        style={{
        }}
      >
        <ul
          style={{
            display: 'flex',
            gap: '30px',
            listStyle: 'none',
          }}
        >
          {
            routes.map((route, i) => (
              <li
                key={i}
                className='pointer'
                style={{ padding: '10px 0' }}
                onClick={() => handleNavClick(route.path)}
              >{route.name}</li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}
