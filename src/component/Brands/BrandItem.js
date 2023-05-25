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
 * @param {Object} props
 * @param {{name: string, description: string}} props.brand
 * @param {string} props.toggledBrand
 * @param {deleteBrandCallback} props.onDeleteBrand
 * @param {brandClickedCallback} props.onBrandClick
 * @returns
 */
const BrandItem = (props) => {
  return (
    <div
      className="brand-item"
      onClick={() => props.onBrandClick(props.brand.name)}
    >
      <h3>{props.brand.name}</h3>
      <hr />
      <p>{props.brand.description || "No description provided"}</p>
      {props.toggledBrand === props.brand.name && (
        <BrandItemButtons
          name={props.brand.name}
          onDeleteBrand={props.onDeleteBrand}
        />
      )}
    </div>
  );
};

export default BrandItem;
