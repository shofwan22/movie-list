import { Image, Modal, React } from "libraries"

const ModalPoster = (props) => {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
            <Image src={props.image} width="100%"/>
        </Modal.Body>
      </Modal>
    );
} 

export default ModalPoster