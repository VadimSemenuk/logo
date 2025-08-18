import styles from "./header.module.css";
import {useState} from "react";
import {routes} from "@/app/components/header/nav.config";
import Button from "@/app/components/header/mobile/components/button/button";
import Contact from "@/app/components/common/icons/contact";

export default function Header() {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleNavButtonClick = () => {
    setIsExpanded(!isExpanded);
  }

  const scrollToPath = (path: string) => {
    document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header
      className={`${styles.header} ${isExpanded ? styles.expanded : ""}`}
    >
      <div className={styles.mainWrapper}>
        <button
          className={styles.callButton}
          onClick={() => scrollToPath('callback')}
        >
          <Contact />
        </button>

        <span
          className={styles.logo}
          onClick={() => scrollToPath('main')}
        >LOGO ADULT</span>

        <Button
          isActive={isExpanded}
          onClick={handleNavButtonClick}
        />
      </div>

      <nav>
        <ul>
          {
            routes.map((route, i) => (
              <li key={i}>
                <a
                  href={`#${route.path}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsExpanded(!isExpanded);
                    scrollToPath(route.path)
                  }}
                >{route.name}</a>
              </li>
            ))
          }
        </ul>

        <button
          onClick={() => {
            setIsExpanded(!isExpanded);
            scrollToPath("callback")
          }}>
          Связаться
        </button>
      </nav>
    </header>
  );
}
