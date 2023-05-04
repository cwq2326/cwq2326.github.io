import { Box, IconButton, Avatar } from "@mui/material";
import { socials } from "../../data";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "10rem",
        bgcolor: "primary.main",
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {socials.map((el, idx: number) => (
        <IconButton target="__blank" href={el.link} key={idx}>
          <Avatar src={el.icon} variant="square" />
        </IconButton>
      ))}
    </Box>
  );
}
