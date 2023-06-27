import styles from "./Modal.module.css";

/**
 * @param {Object} props
 * @param {?string} props.className
 * @param {JSX} props.children
 */
const Modal = (props) => {
  return (
    <div className={`${styles.modal} ${props.className || ""}`}>
      <div className={styles["modal-content"]}>{props.children}</div>
    </div>
  );
};

export default Modal;
