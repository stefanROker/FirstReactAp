import { useEffect, useRef } from "react";
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

  // Resize the textarea to fit all characters without the need of a scrollbar
  const resizeTextarea = () => {
    descriptionRef.current.style.height = "";
    descriptionRef.current.style.height =
      descriptionRef.current.scrollHeight + 2 + "px";
  };

  // Resize the textarea immediately after rendering the component
  useEffect(resizeTextarea, []);

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
        onInput={resizeTextarea}
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
