import styles from "./ButtonGroup.module.css";

/**
 * Group buttons in a single div.
 * @param {Object} props
 * @param {string} props.align - left|right. Align buttons to the left or to the right.
 * @param {?string} props.className
 * @param {JSX} props.children
 */
const ButtonGroup = (props) => {
  return (
    <div
      className={`${styles["button-group-" + props.align]} ${
        props.className || ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default ButtonGroup;
