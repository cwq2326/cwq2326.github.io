import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Divider, Link, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import BasicModal from "./BasicModal";

const navigations = ["About Me", "Projects", "Skills"];

export default function NavBar() {
  const [width, setWidth] = React.useState<number>(window.innerWidth);
  const [isMenuOpen, setisMenuOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.target instanceof Window) {
        setWidth(e.target.window.innerWidth)
      }
    });

    return () => {};
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <BasicModal isOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
      <AppBar position="fixed" sx={{ bgcolor: "primary.main" }}>
        <Toolbar
          sx={{
            width: { sm: "35rem", md: "48rem", lg: "65rem" },
            mx: { sm: "auto" },
            position: "relative",
          }}
        >
          {width <= 600 && <MenuIcon onClick={() => setisMenuOpen(true)} />}
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: { xs: "1.5rem", md: "2rem" },
              position: { xs: "absolute", sm: "static" },
              right: { xs: "1.5rem", sm: "0" },
            }}
          >
            Wen Quan
          </Typography>
          <Stack
            direction={"row"}
            spacing={2}
            divider={
              <Divider
                flexItem
                orientation="vertical"
                sx={{ bgcolor: "white" }}
              />
            }
          >
            {width > 600 &&
              navigations.map((el) => (
                <Typography sx={{ fontSize: "1.5rem" }}>
                  <Link
                    color="inherit"
                    underline="hover"
                    href={`#${el.split(" ").join("").toLowerCase()}`}
                  >
                    {el}
                  </Link>
                </Typography>
              ))}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
