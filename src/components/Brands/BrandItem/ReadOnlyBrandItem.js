import { useState } from "react";
import Button from "../../UI/Button";
import ButtonGroup from "../../UI/ButtonGroup";
import styles from "./ReadOnlyBrandItem.module.css";
import ConfirmationModal from "../../UI/ConfirmationModal";

/**
 * @param {Object} props
 * @param {{name: string, description: string}} props.brand
 * @param {string} props.toggledBrand
 * @param {import("../Brands").deleteBrandCallback} props.onDeleteBrand
 * @param {import("../Brands").brandClickCallback} props.onBrandClick
 * @param {import("./BrandItem").editModeChangeCallback} props.onEditModeChange
 * @returns
 */
const ReadOnlyBrandItem = (props) => {
  const brand = props.brand;
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div
      className={`${styles["brand-item"]} ${!showDeleteModal && styles.hover}`}
    >
      {showDeleteModal && (
        <ConfirmationModal
          onYes={() => {
            props.onDeleteBrand(brand.name);
            setShowDeleteModal(false);
          }}
          onNo={() => setShowDeleteModal(false)}
        >
          Are you sure you want to delete this brand?
        </ConfirmationModal>
      )}
      <div onClick={() => props.onBrandClick(brand.name)}>
        <h3>{brand.name}</h3>
        <hr />
        <p>{brand.description || "No description provided"}</p>
      </div>
      {/* Show Edit/Delete buttons only if this card is toggled. */}
      {props.toggledBrand === brand.name && (
        <ButtonGroup align="left">
          <Button type="button" onClick={() => props.onEditModeChange(true)}>
            Edit
          </Button>
          <Button type="button" onClick={() => setShowDeleteModal(true)}>
            Delete
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
};

export default ReadOnlyBrandItem;
