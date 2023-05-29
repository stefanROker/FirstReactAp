import { useState } from "react";
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

  const [updatedName, setUpdatedName] = useState(brand.name);
  const [updatedDescription, setUpdatedDescription] = useState(
    brand.description
  );

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
      name: updatedName,
      description: updatedDescription,
    });
    props.onEditModeChange(false);
  };

  return (
    <form className={styles["edit-brand-item"]}>
      <input
        type="text"
        size={updatedName.length}
        value={updatedName}
        onChange={(e) => setUpdatedName(e.target.value)}
        required
      />
      <hr />
      <textarea
        value={updatedDescription}
        onInput={textareaInputHandler}
        onChange={(e) => setUpdatedDescription(e.target.value)}
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
