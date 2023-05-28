import { useState } from "react";
import BrandItem from "./BrandItem/BrandItem";
import styles from "./Brands.module.css";
import NewBrandModal from "./NewBrandModal";
import Button from "../UI/Button";

const DUMMY_DATA = [
  {
    name: "Samsung",
    description:
      " A pioneering global brand, known for innovation and cutting-edge technology. From smartphones to appliances, Samsung blends design with performance, delivering products that enhance lives and connect people. Unwavering quality and seamless experiences define their commitment to excellence.",
  },
  {
    name: "Apple",
    description:
      "A trailblazing brand that revolutionized technology. From iPhones to Macs, Apple products embody elegance and functionality. Their commitment to innovation and user experience sets them apart, creating intuitive interfaces and seamless integration. With a blend of style and substance, Apple continues to inspire and shape the digital landscape.",
  },
  {
    name: "Google",
    description:
      "A tech giant known for its powerful search engine and wide range of digital services. Google's innovative products, such as Android, Google Maps, and Google Assistant, have become integral parts of our daily lives. With a focus on data-driven solutions and user-centric design, Google remains a driving force in the digital realm.",
  },
  {
    name: "Microsoft",
    description:
      "A globally recognized software and technology company, Microsoft empowers individuals and organizations with its wide range of products and services. From Windows operating system to Office productivity suite and Azure cloud platform, Microsoft's solutions enable seamless productivity, collaboration, and digital transformation.",
  },
  {
    name: "Amazon",
    description:
      "The world's largest online marketplace, Amazon has revolutionized e-commerce and disrupted various industries. With an extensive product catalog, efficient logistics network, and customer-centric approach, Amazon offers convenience and accessibility to millions. Additionally, Amazon Web Services (AWS) provides scalable cloud computing solutions for businesses of all sizes.",
  },
  {
    name: "Tesla",
    description:
      "A groundbreaking electric vehicle manufacturer, Tesla is driving the transition to sustainable transportation. With their sleek designs, long-range capabilities, and advanced autopilot features, Tesla's electric cars have redefined the automotive industry. Tesla's commitment to renewable energy and energy storage solutions further solidifies their position as an industry leader.",
  },
];

/**
 * @callback updateBrandCallback
 * @param {string} oldName - The old name of the brand.
 * @param {{name: string, description: string}} updatedBrand - Brand object with updated values.
 * @returns {void}
 */

/**
 * Deletes a brand.
 * @callback deleteBrandCallback
 * @param {string} name - The name of the deleted brand.
 */

/**
 * Toggles a certain brand to show the Edit/Delete buttons for it.
 * @callback brandClickCallback
 * @param {string} name - The name of the brand that was clicked.
 */

/**
 * Closes the add new brand modal.
 * @callback closeModalCallback
 * @returns {void}
 */

/**
 * Add a new brand.
 * @callback newBrandCallback
 * @param {{name: string, description: string}} newBrand
 * @returns {void}
 */

/**
 *
 * @param {Object} props
 * @returns
 */
const Brand = (props) => {
  const [brands, setBrands] = useState(DUMMY_DATA);
  const [showNewBrandModal, setShowNewBrandModal] = useState(false);
  // Track which brand is toggled (expanded so you can see the Edit/Delete buttons)
  const [toggledBrand, setToggledBrand] = useState(null);

  const newBrandHandler = (brand) => {
    setBrands((prevBrands) => [{ ...brand, id: Math.random() }, ...prevBrands]);
  };

  const updateBrandHandler = (oldName, updatedBrand) => {
    // Return an array where we replace the updated brand
    setBrands((prevBrands) =>
      prevBrands.map((brand) => (brand.name == oldName ? updatedBrand : brand))
    );
  };

  const deleteBrandHandler = (name) => {
    setBrands((prevBrands) =>
      prevBrands.filter((brand) => brand.name !== name)
    );

    // Probably not necessary, but a good sanity stuff
    if (name === toggledBrand) {
      setToggledBrand(null);
    }
  };

  // TODO: How to set to null whenever clicked anywhere outside the clickable BrandItems?
  const brandClickHandler = (name) => {
    // If the same brand was toggled, set the value back to null. Otherwise, set the value to the new name.
    setToggledBrand((prevName) => (prevName === name ? null : name));
  };

  return (
    <div className={styles.brands}>
      {showNewBrandModal && (
        <NewBrandModal
          onNewBrand={newBrandHandler}
          onCloseModal={() => setShowNewBrandModal(false)}
        />
      )}
      <div>
        <Button onClick={() => setShowNewBrandModal(true)}>
          Add new brand
        </Button>
      </div>
      <div>
        {brands.map((brand) => (
          <BrandItem
            key={brand.name}
            brand={brand}
            onDeleteBrand={deleteBrandHandler}
            onBrandClick={brandClickHandler}
            onUpdateBrand={updateBrandHandler}
            toggledBrand={toggledBrand}
          />
        ))}
      </div>
    </div>
  );
};

export default Brand;
