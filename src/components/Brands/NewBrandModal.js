import { useRef, useState } from "react";
import styles from "./NewBrandModal.module.css";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import ButtonGroup from "../UI/ButtonGroup";

/**
 * @param {{onCloseModal: closeModalCallback, onNewBrand: newBrandCallback}} props
 */
const NewBrandModal = (props) => {
  const nameRef = useRef();
  const descriptionRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCloseModal();
    props.onNewBrand({
      name: nameRef.current.value,
      description: descriptionRef.current.value,
    });
  };

  return (
    <Modal className={styles.modal}>
      <form onSubmit={submitHandler}>
        <label htmlFor="input1">Brand name:</label>
        <input type="text" ref={nameRef} required />

        <label htmlFor="input2">Brand description:</label>
        <input type="text" ref={descriptionRef} />

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
