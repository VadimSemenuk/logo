"use client";

import styles from "./header.module.css";
import { useState } from "react";
import { routes } from "@/components/header/nav.config";
import Email from "@/components/icons/email";
import Button from "@/components/header/components/button/button";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNavButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = (path: string) => {
    setIsExpanded(false);
    scrollToPath(path);
  };

  const scrollToPath = (path: string) => {
    document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${styles.headerContainer} ${isExpanded ? styles.expanded : ""}`}>
      <div
        className={styles.overflow}
        onClick={() => setIsExpanded(false)}
      ></div>
      <header>
        <div className={styles.mainContainer}>
          <button
            className={`${styles.callButton} accent`}
            onClick={() => scrollToPath("callback")}
          >
            <Email />
          </button>

          <span
            className={styles.logo}
            onClick={() => scrollToPath("main")}
          >
            LOGO ADULT
          </span>

          <div className={styles.navButton}>
            <Button
              isActive={isExpanded}
              onClick={handleNavButtonClick}
            />
          </div>
        </div>

        <div className={styles.navContainer}>
          <nav>
            <ul>
              {routes.map((route, i) => (
                <li key={i}>
                  <a
                    className="undecorated"
                    href={`#${route.path}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(route.path);
                    }}
                  >
                    {route.name}
                  </a>
                </li>
              ))}

              <li>
                <a
                  className="button undecorated"
                  href="#callback"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("callback");
                  }}
                >
                  Связаться
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
