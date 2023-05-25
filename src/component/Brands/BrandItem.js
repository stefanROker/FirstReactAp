import { useState } from "react";
import "./BrandItem.css";

/**
 * @callback deleteBrandCallback
 * @param {string} name - The name of the deleted brand.
 */

/**
 * @param {{name: string, onDeleteBrand: deleteBrandCallback}} props
 */
const BrandItemButtons = (props) => {
  return (
    <div>
      <button>Edit</button>
      <button onClick={() => props.onDeleteBrand(props.name)}>Delete</button>
    </div>
  );
};

/**
 *
 * @param {{brand: {name: string, description: string}, onDeleteBrand: deleteBrandCallback}} props
 * @returns
 */
const BrandItem = (props) => {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div
      className="brand-item"
      // Toggle showButtons
      onClick={() => setShowButtons((prev) => !prev)}
    >
      <h3>{props.brand.name}</h3>
      <hr />
      <p>{props.brand.description || "No description provided"}</p>
      {showButtons && (
        <BrandItemButtons
          name={props.brand.name}
          onDeleteBrand={props.onDeleteBrand}
        />
      )}
    </div>
  );
};

export default BrandItem;
