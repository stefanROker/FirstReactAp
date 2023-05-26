import "./BrandItem.css";

/**
 * @callback deleteBrandCallback
 * @param {string} name - The name of the deleted brand.
 */

/**
 * @callback brandClickedCallback
 * @param {string} name - The name of the brand that was clicked.
 */

/**
 *
 * @param {Object} props
 * @param {{name: string, description: string}} props.brand
 * @param {string} props.toggledBrand
 * @param {deleteBrandCallback} props.onDeleteBrand
 * @param {brandClickedCallback} props.onBrandClick
 * @returns
 */
const BrandItem = (props) => {
  const brand = props.brand;

  return (
    <div className="brand-item">
      <div onClick={() => props.onBrandClick(brand.name)}>
        <h3>{brand.name}</h3>
        <hr />
        <p>{brand.description || "No description provided"}</p>
      </div>
      {/* Show Edit/Delete buttons only if this card is toggled. */}
      {props.toggledBrand === brand.name && (
        <div>
          <button type="button">Edit</button>
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

export default BrandItem;
