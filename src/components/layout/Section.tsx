import { Box, Typography } from "@mui/material";
import React from "react";

export default function Section(props: any) {
  const sectionTitleRef = React.useRef(null);
  const [doAnimate, setDoAnimate] = React.useState<boolean>(false);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) setDoAnimate(true);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (sectionTitleRef.current) observer.observe(sectionTitleRef.current);
  }, []);

  return (
    <Box
      id={props.id}
      sx={{
        scrollMarginTop: { xs: "6rem", sm: "7rem" },
        display: "flex",
        flexDirection: "column",
        width: {
          xs: "20rem",
          sm: "60%",
          md: "70%",
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
        ref={sectionTitleRef}
        variant="h1"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          mx: "auto",
          marginBottom: { xs: "2rem", md: "3rem" },
          paddingBottom: { xs: ".5rem", md: "1rem" },
          borderBottom: "solid black .1rem",
          opacity: 0,
          "@keyframes slideUp": {
            from: {
              opacity: 0,
              transform: "translateY(100%)",
            },
            to: {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
          animation: `${doAnimate ? "slideUp 1s forwards" : ""}`,
        }}
      >
        {props.title.toUpperCase()}
      </Typography>
      {props.children}
    </Box>
  );
}
