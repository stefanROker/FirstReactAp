import styles from "./Button.module.css";

/**
 * @param {Object} props
 */
const Button = (props) => {
  return (
    <button {...props} className={`${styles.button} ${props.className || ""}`}>
      {props.children}
    </button>
  );
};

export default Button;
