import "./ReadOnlyBrandItem.css";

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

  return (
    <div className="read-only-brand-item">
      <div onClick={() => props.onBrandClick(brand.name)}>
        <h3>{brand.name}</h3>
        <hr />
        <p>{brand.description || "No description provided"}</p>
      </div>
      {/* Show Edit/Delete buttons only if this card is toggled. */}
      {props.toggledBrand === brand.name && (
        <div>
          <button type="button" onClick={() => props.onEditModeChange(true)}>
            Edit
          </button>
          <button
            type="buttotn"
            onClick={() => props.onDeleteBrand(brand.name)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ReadOnlyBrandItem;
