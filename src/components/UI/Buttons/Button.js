import styles from "./Button.module.css";

/**
 * @param {Object} props
 * @param {Object} props.button
 * @param {JSX} props.children
 */
const Button = (props) => {
  return (
    <button
      {...props.button}
      className={`${styles.button} ${props.button.className || ""}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
