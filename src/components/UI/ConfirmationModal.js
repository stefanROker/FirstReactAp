import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Modal from "./Modal";

/**
 * @param {Object} props
 * @param {?string} props.className
 * @param {JSX} props.children
 * @param {import("../../utils").EventHandlerCallback} props.onYes Callback function to be executed when "Yes" is clicked.
 * @param {import("../../utils").EventHandlerCallback} props.onNo Callback function to be executed when "No" is clicked.
 */
const ConfirmationModal = (props) => {
  const greenBg = "#24ad37";
  const redBg = "#bf1717";

  return (
    <Modal className={props.className || ""}>
      <p>{props.children}</p>
      <ButtonGroup align="right">
        <Button style={{ backgroundColor: greenBg }} onClick={props.onYes}>
          Yes
        </Button>
        <Button style={{ backgroundColor: redBg }} onClick={props.onNo}>
          No
        </Button>
      </ButtonGroup>
    </Modal>
  );
};

export default ConfirmationModal;
