import styles from "./header.module.css";
import {routes} from "@/app/components/header/nav.config";

export default function Header() {

  const handleNavClick = (path: string) => {
    document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header className={styles.header}>
      <span
        className={styles.logo}
        onClick={() => handleNavClick('main')}
      >LOGO ADULT</span>

      <div className={styles.navWrapper}>
        <nav>
          <ul>
            {
              routes.map((route, i) => (
                <li key={i}>
                  <a
                    href={`#${route.path}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(route.path)
                    }}
                  >{route.name}</a>
                </li>
              ))
            }
          </ul>
        </nav>

        <button onClick={() => handleNavClick("callback")}>Связаться</button>
      </div>
    </header>
  );
}
