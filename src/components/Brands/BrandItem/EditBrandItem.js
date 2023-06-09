import { useRef, useState } from "react";
import styles from "./EditBrandItem.module.css";
import Button from "../../UI/Button";
import ButtonGroup from "../../UI/ButtonGroup";

/**
 *
 * @param {Object} props
 * @param {{name: string, description: string}} props.brand
 * @param {import("./BrandItem").editModeChangeCallback} props.onEditModeChange
 * @param {import("../Brands").updateBrandCallback} props.onUpdateBrand
 * @returns
 */
const EditBrandItem = (props) => {
  const brand = props.brand;
  const nameRef = useRef();
  const descriptionRef = useRef();

  // TODO AB: How to apply this on load as well?
  // Function that resizes the textarea element to fit the description.
  const textareaInputHandler = (e) => {
    e.target.style.height = "";
    e.target.style.height = e.target.scrollHeight + 2 + "px";
  };

  const cancelClickHandler = () => {
    props.onEditModeChange(false);
  };

  const saveClickHandler = () => {
    props.onUpdateBrand(brand.name, {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
    });
    props.onEditModeChange(false);
  };

  return (
    <form className={styles["edit-brand-item"]}>
      <input
        type="text"
        size={props.brand.length}
        defaultValue={props.brand.name}
        ref={nameRef}
        required
      />
      <hr />
      <textarea
        defaultValue={props.brand.description}
        onInput={textareaInputHandler}
        ref={descriptionRef}
      ></textarea>
      <ButtonGroup align="left">
        <Button type="button" onClick={saveClickHandler}>
          Save
        </Button>
        <Button type="button" onClick={cancelClickHandler}>
          Cancel
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default EditBrandItem;
