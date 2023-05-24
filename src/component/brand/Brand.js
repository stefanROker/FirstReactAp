import "./Brand.css";

const Brand = (props) => {
  //   const addBrandButton = new Button();
  const addBrandHandler = () => {
    console.log("Ai luat mwia");
  };
  //   async function getBrands() {
  //     const response = await fetch("http://localhost:3001/brands", {
  //       mode: "no-cors",
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     return await response.json();
  //   }

  //   console.log(getBrands());

  const dummyData = [
    {
      name: "brand1",
      description: "descr1",
    },
    {
      name: "brand2",
      description: "decr2",
    },
  ];

  return (
    <div className="brand">
      <div>
        <button onClick={addBrandHandler}>Add new brand</button>
      </div>
      <div>
        {dummyData.map((brand) => (
          <div className="brand__item">
            <p>
              {brand.name} and {brand.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
