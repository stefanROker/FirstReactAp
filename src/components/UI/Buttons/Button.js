import { pSBC } from "../../../utils";
import styles from "./Button.module.css";

/**
 * @param {Object} props
 * @param {?Object} props.style
 * @param {?string} props.className
 * @param {JSX} props.children
 * @param {import("../../../utils").EventHandlerCallback} props.onClick
 * @param {?import("../../../utils").EventHandlerCallback} props.onMouseEnter
 * @param {?import("../../../utils").EventHandlerCallback} props.onMouseLeave
 */
const Button = (props) => {
  const defaultBlueBgColor = "#007bff";

  const mouseEnterHandler = (event) => {
    // Darken button when hovering
    event.target.style.backgroundColor = pSBC(
      -0.4,
      event.target.style.backgroundColor
    );

    if (props.onMouseEnter) {
      props.onMouseEnter();
    }
  };

  const mouseLeaveHandler = (event) => {
    // Restore initial color
    event.target.style.backgroundColor = props.style
      ? props.style.backgroundColor
      : defaultBlueBgColor;

    if (props.onMouseLeave) {
      props.onMouseLeave();
    }
  };

  return (
    <button
      style={{ backgroundColor: defaultBlueBgColor, ...props.style }}
      className={`${styles.button} ${props.className || ""}`}
      onClick={props.onClick}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {props.children}
    </button>
  );
};

export default Button;
