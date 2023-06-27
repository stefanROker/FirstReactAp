import { useState, useRef, useCallback } from "react";
import AdminPanel from "../AdminPanel";
import logo from "../../../FE files/samsung-logo-transparent.png";

let id = 0;

const DUMMY_DATA = [
  {
    id: ++id,
    name: "Acme Corporation",
    description:
      "Acme Corporation is a leading provider of innovative products and solutions for various industries. With a strong focus on quality and customer satisfaction, we strive to deliver cutting-edge technology that drives business growth.",
    logo: logo,
  },
  {
    id: ++id,
    name: "Tech Solutions Inc.",
    description:
      "Tech Solutions Inc. is a global technology company that specializes in software development and IT consulting. We help businesses streamline their processes, enhance productivity, and achieve their digital transformation goals.",
    logo: logo,
  },
  {
    id: ++id,
    name: "Globex Corporation",
    description:
      "Globex Corporation is a multinational conglomerate with diverse business interests spanning across industries such as energy, technology, finance, and manufacturing. We are committed to driving sustainable growth and delivering value to our stakeholders.",
    logo: logo,
  },
  {
    id: ++id,
    name: "Innovative Designs Ltd.",
    description:
      "Innovative Designs Ltd. is a creative design agency that specializes in branding, web design, and user experience. We combine artistry and technical expertise to create visually stunning and user-friendly digital experiences.",
    logo: logo,
  },
  {
    id: ++id,
    name: "EcoTech Solutions",
    description:
      "EcoTech Solutions is a sustainability-focused company dedicated to developing eco-friendly products and solutions. We harness the power of technology to address environmental challenges and promote a greener and more sustainable future.",
    logo: logo,
  },
  {
    id: ++id,
    name: "Global Logistics Group",
    description:
      "Global Logistics Group is a leading provider of comprehensive logistics and supply chain management services. With a global network and advanced technology, we ensure efficient transportation and seamless operations for businesses worldwide.",
    logo: logo,
  },
  {
    id: ++id,
    name: "Data Analytics Solutions",
    description:
      "Data Analytics Solutions offers advanced analytics and business intelligence solutions that empower organizations to unlock the value of their data. We provide actionable insights and data-driven strategies to drive growth and competitive advantage.",
    logo: logo,
  },
  {
    id: ++id,
    name: "Healthcare Innovators",
    description:
      "Healthcare Innovators is a healthcare technology company dedicated to revolutionizing patient care. We develop innovative solutions that improve diagnostics, treatment, and overall healthcare delivery, ultimately enhancing patient outcomes.",
    logo: logo,
  },
  {
    id: ++id,
    name: "Financial Consultancy Services",
    description:
      "Financial Consultancy Services is a trusted advisor in the financial industry, providing expert guidance and tailored solutions to individuals and businesses. We help clients achieve their financial goals and navigate complex financial landscapes.",
    logo: logo,
  },
  {
    id: ++id,
    name: "MediaTech Solutions",
    description:
      "MediaTech Solutions specializes in media production and technology solutions. From video production and editing to live streaming and virtual reality experiences, we help businesses leverage the power of media to engage and captivate audiences.",
    logo: logo,
  },
];

/**
 * @param {Object} props
 * @param {{id: number, name: string, description: string, logo: string}} props.brand
 * @returns
 */
const BrandItem = (props) => {
  return (
    <tr>
      <td>{props.brand.id}</td>
      <td>{props.brand.name}</td>
      <td>{props.brand.description}</td>
      <td>
        <img src={props.brand.logo} width="40" height="20" />
      </td>
    </tr>
  );
};

/**
 *
 * @param {Object} props
 * @returns
 */
const Brand = (props) => {
  const [brands, setBrands] = useState(DUMMY_DATA);

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
  };

  const nameRef = useRef();
  const nameInput = {
    ref: nameRef,
    label: {
      text: "Brand name",
    },
    input: {
      type: "text",
      required: true,
    },
  };

  const descRef = useRef();
  const descInput = {
    ref: descRef,
    label: {
      text: "Brand description",
    },
    input: {
      type: "text",
    },
  };

  const logoRef = useRef();
  const logoInput = {
    ref: logoRef,
    label: {
      text: "Brand logo",
    },
    input: {
      type: "text",
    },
  };

  return (
    <AdminPanel
      modal={{
        inputs: [nameInput, descInput, logoInput],
        onSubmit: () => {
          setBrands((prevBrands) => [
            {
              id: ++id,
              name: nameRef.current.value,
              description: descRef.current.value,
              logo: logo,
            },
            ...prevBrands,
          ]);
        },
      }}
      button={{
        text: "Add Brand",
      }}
      search={{
        onSearch: useCallback((term) => {
          setBrands(
            DUMMY_DATA.filter((brand) =>
              brand.name.toLowerCase().includes(term.toLowerCase())
            )
          );
        }),
      }}
      table={{
        heading: Object.keys(DUMMY_DATA[0]),
        elements: brands.map((brand) => (
          <BrandItem key={brand.id} brand={brand} />
        )),
      }}
    />
  );
};

export default Brand;
