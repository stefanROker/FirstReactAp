import styles from "./ButtonGroup.module.css";

/**
 * Group buttons in a single div.
 * @param {Object} props
 * @param {!string} props.align - left|right. Align buttons to the left or to the right.
 */
const ButtonGroup = (props) => {
  return (
    <div
      {...props}
      className={`${styles["button-group-" + props.align]} ${props.className || ""}`}
    >
      {props.children}
    </div>
  );
};

export default ButtonGroup;
