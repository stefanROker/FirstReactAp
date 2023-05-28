import { useState } from "react";
import styles from "./NewBrandModal.module.css";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import ButtonGroup from "../UI/ButtonGroup";

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
    <Modal className={styles.modal}>
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

        <ButtonGroup align="right">
          <Button type="submit">Create</Button>
          <Button type="button" onClick={props.onCloseModal}>
            Cancel
          </Button>
        </ButtonGroup>
      </form>
    </Modal>
  );
};

export default NewBrandModal;
