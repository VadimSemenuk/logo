import Modal from "react-modal";
import styles from "./modal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    borderRadius: 0,
  },
};

export default function ModalView(props: Modal.Props) {
  return (
    <Modal
      {...props}
      style={customStyles}
      ariaHideApp={false}
      closeTimeoutMS={150}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.content}>{props.children}</div>
        <div className={styles.closeWrapper}>
          <button
            aria-label="закрыть"
            onClick={props.onRequestClose}
          >
            Закрыть
          </button>
        </div>
      </div>
    </Modal>
  );
}
