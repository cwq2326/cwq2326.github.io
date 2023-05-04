import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import UseScrollIntoView from "../../hooks/UseScrollIntoView";
import { Project } from "../../types";

type ProjectCardProps = {
  idx: number;
} & Project;

export default function ProjectCard(props: ProjectCardProps) {
  const cardRef = React.useRef<HTMLDivElement | null>(null);
  let doAnimate = UseScrollIntoView(cardRef);

  return (
    <Card
      ref={cardRef}
      sx={{
        width: {
          md: "calc(50% - .5rem)",
          lg: "calc(33% - .6rem)",
        },
        position: "relative",
        backgroundColor: "#EDF5E1",
        color: "#2d3032",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        opacity: 0,
        "&:hover": {
          transform: "translate(-.5rem, -.5rem)",
          boxShadow: ".3rem .3rem 10px grey",
        },
        "@keyframes grow": {
          from: {
            scale: 0,
          },
          to: {
            opacity: 1,
            scale: 1,
          },
        },
        animation: `${
          doAnimate ? `.5s ${(props.idx % 3) * 100}ms grow forwards ` : ""
        }`,
      }}
    >
      <CardContent>
        <Typography
          variant="h3"
          sx={{
            fontSize: "1.2rem",
          }}
        >
          {props.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: " space-between",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontStyle: "italic", fontSize: ".9rem" }}
          >
            {props.date}
          </Typography>
          <Button href={props.repo} target="__blank">
            <GitHubIcon sx={{ color: "primary.contrastText", ml: "auto" }} />
          </Button>
        </Box>
        <Divider sx={{ bgcolor: "#d2d3d3" }} />
        <Typography
          variant="body1"
          sx={{ mt: ".5rem", fontSize: ".9rem" }}
          gutterBottom
        >
          {props.description}
        </Typography>
        {props.techStack.map((el: string, idx: number) => (
          <Chip
            key={idx}
            label={el}
            size="small"
            sx={[
              {
                mr: ".2rem",
                mt: ".2rem",
                color: "primary.contrastText",
                fontSize: ".7rem",
              },
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
  );
}
