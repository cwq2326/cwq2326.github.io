import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, Stack } from "@mui/material";

export default function BasicModal(props: any) {
  function handleClick(id: string) {
    props.setisMenuOpen(false);
    window.location.href = id;
  }
  return (
    <div>
      <Modal
        open={props.isOpen}
        onClose={() => props.setisMenuOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%",
            height: "10rem",
            bgcolor: "background.paper",
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
          }}
        >
          <Stack
            spacing={2}
            divider={<Divider flexItem />}
            alignItems={"center"}
          >
            <Typography onClick={handleClick.bind(null, "#aboutme")}>
              About
            </Typography>
            <Typography onClick={handleClick.bind(null, "#projects")}>
              Projects
            </Typography>
            <Typography onClick={handleClick.bind(null, "#skills")}>
              Skills
            </Typography>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
