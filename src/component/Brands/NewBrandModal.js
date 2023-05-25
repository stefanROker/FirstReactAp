import { useState } from "react";
import "./NewBrandModal.css";

/**
 * Closes the add new brand modal.
 * @callback closeModalCallback
 * @returns {void}
 */

/**
 * Callback to be used when a new brand is created.
 * @callback newBrandCallback
 * @param {{name: string, description: string}} newBrand
 * @returns {void}
 */

/**
 * @param {{onCloseModal: closeModalCallback, onNewBrand: newBrandCallback}} props
 */
const NewBrandModal = (props) => {
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const closeModal = () => {
    setNewName("");
    setNewDescription("");
    props.onCloseModal();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newBrand = {
      name: newName,
      description: newDescription,
    };
    closeModal();
    props.onNewBrand(newBrand);
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
            <button type="button" onClick={() => closeModal()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBrandModal;
