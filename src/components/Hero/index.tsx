import { Box, Typography } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";

export default function index() {
  return (
    <Box
      sx={{
        bgcolor: "text.primary",
        my: "10rem",
        mx: "auto",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: "space-between",
        alignItems: "center",
        p: "2rem",
        position: "relative",
        color: "primary.contrastText",
        width: {
          xs: "16rem",
          sm: "28rem",
          md: "48rem",
          lg: "65rem",
        },
      }}
    >
      <Box my="auto" flex={2}>
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "2rem",
              md: "3rem",
              lg: "4rem",
            },
          }}
        >
          Hi there!
          <WavingHandIcon fontSize="inherit" sx={{ paddingLeft: "1rem" }} />
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "4rem",
              md: "5rem",
              lg: "6rem",
            },
          }}
        >
          <Typography
            sx={{
              display: "inline-block",
              fontSize: {
                xs: "2rem",
                md: "3rem",
                lg: "4rem",
              },
              pr: "1rem",
            }}
          >
            I'm
          </Typography>
          Wen Quan
        </Typography>
      </Box>
      <Box flex={1} src="/vite.svg" component="img" sx={{ width: "50%" }}></Box>
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          bgcolor: "primary.contrastText",
          zIndex: "-1",
          top: "1rem",
          left: "1rem",
        }}
      ></Box>
    </Box>
  );
}
