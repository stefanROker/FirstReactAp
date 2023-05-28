import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import styles from "./ConfirmationModal.module.css";
import Modal from "./Modal";

/**
 * @callback yesNoCallback
 * @returns {void}
 */

/**
 * @param {Object} props
 * @param {yesNoCallback} props.onYes Callback function to be executed when "Yes" is clicked.
 * @param {yesNoCallback} props.onNo Callback function to be executed when "No" is clicked.
 */
const ConfirmationModal = (props) => {
  return (
    <Modal className={props.className || ""}>
      <p>{props.children}</p>
      <ButtonGroup align="right">
        <Button onClick={props.onYes}>Yes</Button>
        <Button onClick={props.onNo}>No</Button>
      </ButtonGroup>
    </Modal>
  );
};

export default ConfirmationModal;
