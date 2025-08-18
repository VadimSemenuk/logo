import {useEffect, useState} from "react";
import PCHeader from "./pc/header";
import MobileHeader from "./mobile/header";
import styles from "./header.module.css"

interface WindowDimensions {
  width: number;
  height: number;
}

function getWindowDimensions(): WindowDimensions {
  if (typeof window === "undefined") {
    return {
      width: 0,
      height: 0
    }
  }

  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function Header() {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions | null>();

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`${styles.wrapper} ${!windowDimensions ? styles.hidden : ""}`}
    >
      {
        (!windowDimensions || windowDimensions.width <= 940) ? <MobileHeader /> : <PCHeader />
      }
    </div>
  )
}