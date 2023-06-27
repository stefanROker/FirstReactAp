import Button from "../UI/Buttons/Button";
import Card from "../UI/Cards/Card";
import InputModal from "../UI/Modals/InputModal";
import classes from "./AdminPanel.module.css";
import { useState } from "react";
import ReactDOM from "react-dom";

const AdminPanel = (props) => {
  const [showModal, setShowModal] = useState(false);

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

      <Card className={classes["table-card"]}>
        <div className={classes["table-header"]}>
          <Button
            button={{
              className: classes["add-button"],
              onClick: () => setShowModal(true),
            }}
          >
            {props.button.text}
          </Button>
          <input
            className={classes["search-input"]}
            type="text"
            placeholder="Search..."
          ></input>
        </div>
        <div className={classes["table-wrapper"]}>
          <table className={classes["table-data"]}>
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
