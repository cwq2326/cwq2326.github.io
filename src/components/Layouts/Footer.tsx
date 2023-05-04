import { Avatar, Box, IconButton, Typography } from "@mui/material";

import { socials } from "../../data";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "10rem",
        bgcolor: "primary.main",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: "1rem",
      }}
    >
      <Box>
      {socials.map((el, idx: number) => (
        <IconButton target="__blank" href={el.link} key={idx}>
          <Avatar src={el.icon} variant="square" />
        </IconButton>
      ))}
      </Box>
      <Box>
        <Typography variant="subtitle1"
        sx={{
          fontSize: ".5rem"
        }}
        >Designed and built by Chua Wen Quan</Typography>
      </Box>
    </Box>
  );
}
