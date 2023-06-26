import { useContext, useState } from "react";
import Button from "../../UI/Button";
import ButtonGroup from "../../UI/ButtonGroup";
import styles from "./ReadOnlyBrandItem.module.css";
import ConfirmationModal from "../../UI/ConfirmationModal";
import ReactDOM from "react-dom";
import BrandContext from "../../../store/brand-context";

/**
 * @param {Object} props
 * @param {{name: string, description: string}} props.brand
 * @param {import("../Brands").deleteBrandCallback} props.onDeleteBrand
 * @param {import("./BrandItem").editModeChangeCallback} props.onEditModeChange
 * @returns
 */
const ReadOnlyBrandItem = (props) => {
  const brand = props.brand;
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const brandContext = useContext(BrandContext);

  return (
    <div className={`${styles["brand-item"]} ${styles.hover}`}>
      {/* Delete confirmation modal. */}
      {showDeleteModal &&
        ReactDOM.createPortal(
          <ConfirmationModal
            onYes={() => {
              props.onDeleteBrand(brand.name);
              setShowDeleteModal(false);
            }}
            onNo={() => setShowDeleteModal(false)}
          >
            Are you sure you want to delete this brand?
          </ConfirmationModal>,
          document.body
        )}

      <div onClick={() => brandContext.onBrandClick(brand.name)}>
        <h3>{brand.name}</h3>
        <hr />
        <p>{brand.description || "No description provided"}</p>
      </div>

      {/* Show Edit/Delete buttons only if this card is toggled. */}
      {brandContext.toggledBrand === brand.name && (
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
