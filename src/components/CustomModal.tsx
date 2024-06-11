import { Paper } from "@mui/material";
import Modal from "@mui/material/Modal";

interface CustomModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactElement;
}

function CustomModal({ isOpen, closeModal, children }: CustomModalProps) {
  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Paper
        elevation={2}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          maxWidth: "100%",
          maxHeight: "90%",
          overflowY: "auto",
        }}
      >
        {children}
      </Paper>
    </Modal>
  );
}

export default CustomModal;
