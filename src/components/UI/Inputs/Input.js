// import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor={props.input.id}>{props.label.text}</label>
      <input {...props.input} ref={ref} />
    </>
  );
});

export default Input;
