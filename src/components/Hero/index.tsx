import WavingHandIcon from "@mui/icons-material/WavingHand";
import { Box, Divider, Typography } from "@mui/material";

export default function index() {
  return (
    <Box
      sx={{
        mx: "auto",
        mb: {
          xs: "-6rem",
        },
        display: "flex",
        alignItems: "center",
        p: "2rem",
        color: "primary.contrastText",
        width: {
          xs: "18rem",
          sm: "28rem",
          md: "38rem",
          lg: "58rem",
        },
        height: "100vh",
      }}
    >
      <Box flex={1}>
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "3rem",
              md: "4rem",
              lg: "5rem",
            },
          }}
        >
          Hi there!
          <WavingHandIcon
            fontSize="inherit"
            sx={{
              "@keyframes wave": {
                "0%": {
                  transform: "rotate(-10deg)",
                },

                "50%": {
                  transform: "rotate(10deg)",
                },

                "100%": {
                  transform: "rotate(-10deg)",
                },
              },
              animation: " wave 1s infinite ",
              paddingLeft: "1rem",
            }}
          />
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "2.5rem",
              sm: "4rem",
              md: "5rem",
              lg: "6rem",
            },
          }}
        >
          <Typography
            sx={{
              display: "inline-block",
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
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
        <Divider>
          <Typography variant="subtitle1">
            Aspiring fullstack developer
          </Typography>
        </Divider>
      </Box>
    </Box>
  );
}
