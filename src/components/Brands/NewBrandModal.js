import { useState } from "react";
import "./NewBrandModal.css";

/**
 * @param {{onCloseModal: closeModalCallback, onNewBrand: newBrandCallback}} props
 */
const NewBrandModal = (props) => {
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCloseModal();
    props.onNewBrand({
      name: newName,
      description: newDescription,
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={submitHandler}>
          <label htmlFor="input1">Brand name:</label>
          <input
            type="text"
            onChange={(e) => setNewName(e.target.value)}
            value={newName}
            required
          />

          <label htmlFor="input2">Brand description:</label>
          <input
            type="text"
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
          />

          <div className="modal-buttons">
            <button type="submit">Create</button>
            <button type="button" onClick={props.onCloseModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBrandModal;
