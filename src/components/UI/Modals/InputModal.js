import Button from "../Buttons/Button";
import ButtonGroup from "../Buttons/ButtonGroup";
import Input from "../Inputs/Input";
import Modal from "../Modals/Modal";
import classes from "./InputModal.module.css";

/**
 *
 * @param {Object} props
 * @param {() => void} props.onCloseModal
 * @param {() => void} props.onSubmit
 * @param {[{ref: React.Reference, label: {text: string}, input: Object.<string, string>}]} props.inputs
 * @returns
 */
const InputModal = (props) => {
  return (
    <Modal className={classes.modal}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onCloseModal();
          props.onSubmit();
        }}
      >
        {props.inputs.map((input) => (
          <Input key={input.input.id} {...input} />
        ))}

        <ButtonGroup align="right">
          <Button button={{ type: "submit" }}>Create</Button>
          <Button button={{ type: "button", onClick: props.onCloseModal }}>
            Cancel
          </Button>
        </ButtonGroup>
      </form>
    </Modal>
  );
};

export default InputModal;
