import Button from "../UI/Buttons/Button";
import Card from "../UI/Cards/Card";
import InputModal from "../UI/Modals/InputModal";
import classes from "./AdminPanel.module.css";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

/**
 *
 * @param {Object} props
 * @param {{text: string}} props.button
 * @param {{onSearch: (term: string) => void}} props.search
 * @param {{inputs: [{ref: React.Reference, label: {text: string}, input: Object}], onSubmit: () => void}} props.modal
 * @param {{heading: [string], elements: JSX}} props.table
 * @returns
 */
const AdminPanel = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
    let timeout = null;
    if (searchTerm != null) {
      timeout = setTimeout(() => props.search.onSearch(searchTerm), 300);
    }
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <>
      {showModal &&
        ReactDOM.createPortal(
          <InputModal
            {...props.modal}
            onCloseModal={() => setShowModal(false)}
          />,
          document.body
        )}

      <Card className={`${classes["table-card"]} shadow`}>
        <div className={classes["table-header"]}>
          <Button
            button={{
              className: `${classes["add-button"]} shadow`,
              onClick: () => setShowModal(true),
            }}
          >
            {props.button.text}
          </Button>
          <input
            className={`${classes["search-input"]} shadow`}
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </div>
        <div className={classes["table-wrapper"]}>
          <table className={`${classes["table-data"]} shadow`}>
            <thead>
              <tr>
                {props.table.heading.map((el, idx) => (
                  <th key={idx}>{el.charAt(0).toUpperCase() + el.slice(1)}</th>
                ))}
              </tr>
            </thead>
            <tbody>{props.table.elements}</tbody>
          </table>
        </div>
      </Card>
    </>
  );
};

export default AdminPanel;
