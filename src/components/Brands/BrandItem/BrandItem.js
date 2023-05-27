import { useState } from "react";
import styles from "./BrandItem.module.css";
import EditBrandItem from "./EditBrandItem";
import ReadOnlyBrandItem from "./ReadOnlyBrandItem";

/**
 * Changes the edit mode of this brand.
 * @callback editModeChangeCallback
 * @param {boolean} isEditing - Whether edit mode is enabled or not.
 */

/**
 * @param {Object} props
 * @param {{name: string, description: string}} props.brand
 * @param {string} props.toggledBrand
 * @param {import("../Brands").deleteBrandCallback} props.onDeleteBrand
 * @param {import("../Brands").brandClickCallback} props.onBrandClick
 * @param {import("../Brands").updateBrandCallback} props.onUpdateBrand
 * @returns
 */
const BrandItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  // If we are in edit mode and another brand has been toggled, disable edit mode here
  if (isEditing && props.toggledBrand !== props.brand.name) {
    setIsEditing(false);
  }

  return (
    <div className={styles["brand-item"]}>
      {isEditing ? (
        <EditBrandItem
          brand={props.brand}
          toggledBrand={props.toggledBrand}
          onEditModeChange={setIsEditing}
          onUpdateBrand={props.onUpdateBrand}
        />
      ) : (
        <ReadOnlyBrandItem
          brand={props.brand}
          toggledBrand={props.toggledBrand}
          onDeleteBrand={props.onDeleteBrand}
          onBrandClick={props.onBrandClick}
          onEditModeChange={setIsEditing}
        />
      )}
    </div>
  );
};

export default BrandItem;
