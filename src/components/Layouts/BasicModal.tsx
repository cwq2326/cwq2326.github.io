import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

type BasicModalProps = {
  isOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export default function BasicModal(props: BasicModalProps) {
  return (
    <div>
      <Modal
        open={props.isOpen}
        onClose={() => props.setIsMenuOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            bgcolor: 'background.paper',
            padding: '2rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '5px',
          }}
        >
          {props.children}
        </Box>
      </Modal>
    </div>
  );
}
