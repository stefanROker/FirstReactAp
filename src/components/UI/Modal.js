import styles from "./Modal.module.css";

/**
 * @param {Object} props
 */
const Modal = (props) => {
  return (
    <div {...props} className={`${styles.modal} ${props.className || ""}`}>
      <div className={styles["modal-content"]}>{props.children}</div>
    </div>
  );
};

export default Modal;
