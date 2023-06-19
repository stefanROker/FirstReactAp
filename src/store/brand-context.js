import React, { useState } from "react";

const BrandContext = React.createContext({
  toggledBrand: null,
  onBrandClick: (name) => {},
});

export const BrandContextProvider = (props) => {
  // Track which brand is toggled (expanded so you can see the Edit/Delete buttons)
  const [toggledBrand, setToggledBrand] = useState(null);

  // TODO: How to set to null whenever clicked anywhere outside the clickable BrandItems?
  const brandClickHandler = (name) => {
    // If the same brand was toggled, set the value back to null. Otherwise, set the value to the new name.
    setToggledBrand((prevName) => (prevName === name ? null : name));
  };

  return (
    <BrandContext.Provider
      value={{
        toggledBrand: toggledBrand,
        onBrandClick: brandClickHandler,
      }}
    >
      {props.children}
    </BrandContext.Provider>
  );
};

export default BrandContext;
