import { Box, Typography } from "@mui/material";

export default function Section(props: any) {
  return (
    <Box
      id={props.id}
      sx={{
        scrollMarginTop: { xs: "6rem", sm: "7rem" },
        display: "flex",
        flexDirection: "column",
        width: {
          xs: "20rem",
          sm: "38rem",
          md: "48rem",
          lg: "65rem",
        },
        my: {
          xs: "2rem",
          md: "3rem",
          lg: "4rem",
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          mx: "auto",
          marginBottom: { xs: "2rem", md: "3rem" },
          paddingBottom: { xs: ".5rem", md: "1rem" },
          borderBottom: "solid black .2rem",
        }}
      >
        {props.title}
      </Typography>
      {props.children}
    </Box>
  );
}
