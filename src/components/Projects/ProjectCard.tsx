import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ProjectCard(props: any) {
  const [frontFocus, setFrontFocus] = useState<boolean>(true);

  return (
    <>
      <Card
        sx={{
          width: {
            xs: "80%",
            sm: "45%",
            md: "40%",
            lg: "30%",
          },
          position: "relative",
          backgroundColor: "#EDF5E1",
          border: "black solid .1rem",
          color: "#2d3032",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <CardMedia image="/vite.svg" sx={{ height: "15rem" }} />
          <Typography
            variant="h2"
            sx={{
              py: ".5rem",
              fontSize: "1.4rem",
            }}
          >
            {props.title}
          </Typography>
          <Typography sx={{ fontStyle: "italic", paddingBottom: "1rem" }}>
            {props.shortDescription}
          </Typography>
          <Divider sx={{ bgcolor: "#d2d3d3" }} />
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Button onClick={() => setFrontFocus((x) => !x)}>
            <FlipCameraAndroidIcon sx={{ color: "primary.contrastText" }} />
          </Button>
          <Button href={props.repo} target="__blank">
            <GitHubIcon sx={{ color: "primary.contrastText" }} />
          </Button>
        </CardActions>
        <Card
          sx={{
            width: "100%",
            height: "85%",
            position: "absolute",
            bgcolor: "primary.main",
            color: "primary.contrastText",
            top: 0,
            zIndex: `${!frontFocus ? 1 : -1}`,
            overflow: "auto",
          }}
        >
          <CardContent>
            <Typography paragraph>{props.description}</Typography>
            <Typography>{props.date}</Typography>
            <Divider sx={{ bgcolor: "#2D3032", my: ".5rem" }} />
            {props.techStack.map((el: string) => (
              <Chip
                label={el}
                sx={[
                  { mr: ".2rem", mt: ".2rem", color: "primary.contrastText" },
                  {
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  },
                ]}
              />
            ))}
          </CardContent>
        </Card>
      </Card>
    </>
  );
}
