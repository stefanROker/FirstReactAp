import Button from "../Buttons/Button";
import ButtonGroup from "../Buttons/ButtonGroup";
import Input from "../Inputs/Input";
import Modal from "../Modals/Modal";
import classes from "./InputModal.module.css";

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
          <Input key={input.name} {...input} />
        ))}

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

export default InputModal;
