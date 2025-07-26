import styles from "./header.module.css";
import {useState} from "react";

const routes = [
  {
    path: "work",
    name: "Направления работы",
  },
  {
    path: "classes",
    name: "Занятия",
  },
  {
    path: "about",
    name: "Обо мне",
  },
  {
    path: "questions",
    name: "Вопросы",
  },
]

export default function Header() {

  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleNavClick = (path: string) => {
    document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header
      className={`${styles.headerWrapper} ${isExpanded ? styles.expanded : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <span
        className={styles.logo}
        onClick={() => handleNavClick('main')}
      >LOGO ADULT</span>


      <div className={styles.menuTriggerWrapper}>
        <span className={styles.menuTriggerOpen}>МЕНЮ</span>
        <span className={styles.menuTriggerClose}>ЗАКРЫТЬ</span>
      </div>

      <nav>
        <ul>
          {
            routes.map((route, i) => (
              <li
                key={i}
                onClick={() => handleNavClick(route.path)}
              >{route.name}</li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}
