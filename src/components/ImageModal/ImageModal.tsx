import Modal from 'react-modal';
import { lockedScroll } from "@/services/lockedScroll.js";

interface ImageModalProps {
    children: React.ReactNode;
    handleClose: () => void;
    modalIsOpen: boolean;
}

Modal.setAppElement('#modal-root');

const ImageModal: React.FC<ImageModalProps> = ({ children, handleClose, modalIsOpen }) => {
    lockedScroll(modalIsOpen);

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleClose}
                contentLabel="Example Modal"
            >
                {children}
            </Modal>
        </div>
    );
};

export default ImageModal;
