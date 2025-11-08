import styles from "./button.module.css";

interface Props {
  isActive: boolean;
  onClick: () => void;
}

export default function Button({ isActive, onClick }: Props) {
  return (
    <div
      className={`${styles.menuIcon} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
