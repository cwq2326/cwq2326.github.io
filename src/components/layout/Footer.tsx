import { Box, IconButton, Avatar } from "@mui/material";

const socials = [
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    link: "https://github.com/cwq2326",
  },
  {
    name: "Linkedin",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    link: "https://linkedin.com/in/chuawenquan",
  },
];

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
      {socials.map((el) => (
        <IconButton target="__blank" href={el.link}>
          <Avatar src={el.icon} variant="square" />
        </IconButton>
      ))}
    </Box>
  );
}
