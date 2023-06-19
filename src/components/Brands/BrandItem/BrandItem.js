import { useContext, useState } from "react";
import styles from "./BrandItem.module.css";
import EditBrandItem from "./EditBrandItem";
import ReadOnlyBrandItem from "./ReadOnlyBrandItem";
import BrandContext from "../../../store/brand-context";

/**
 * Changes the edit mode of this brand.
 * @callback editModeChangeCallback
 * @param {boolean} isEditing - Whether edit mode is enabled or not.
 */

/**
 * @param {Object} props
 * @param {{name: string, description: string}} props.brand
 * @param {import("../Brands").deleteBrandCallback} props.onDeleteBrand
 * @param {import("../Brands").updateBrandCallback} props.onUpdateBrand
 * @returns
 */
const BrandItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const brandContext = useContext(BrandContext);

  // If we are in edit mode and another brand has been toggled, disable edit mode here
  if (isEditing && brandContext.toggledBrand !== props.brand.name) {
    setIsEditing(false);
  }

  return (
    <li className={styles["brand-item-card"]}>
      {isEditing ? (
        <EditBrandItem
          brand={props.brand}
          onEditModeChange={setIsEditing}
          onUpdateBrand={props.onUpdateBrand}
        />
      ) : (
        <ReadOnlyBrandItem
          brand={props.brand}
          onDeleteBrand={props.onDeleteBrand}
          onEditModeChange={setIsEditing}
        />
      )}
    </li>
  );
};

export default BrandItem;
