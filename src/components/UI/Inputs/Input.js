// import classes from "./Input.module.css";
import React from "react";

/**
 * @param {Object} props
 * @param {React.ref} ref
 * @param {{input: Object, label: {text: string}}} props.input
 */
const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <label>{props.label.text}</label>
      <input {...props.input} ref={ref} />
    </>
  );
});

export default Input;
