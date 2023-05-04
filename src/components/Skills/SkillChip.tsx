import { Avatar, Chip } from "@mui/material";
import React from "react";

type SkillChipProps = {
  name: string;
  icon?: string;
  idx: number;
};

const SkillChip = (props: SkillChipProps) => {
  const chipRef = React.useRef(null);
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
    if (chipRef.current) observer.observe(chipRef.current);
  }, []);
  
  return (
    <Chip
    ref={chipRef}
      label={props.name}
      variant="outlined"
      avatar={<Avatar src={props.icon} />}
      sx={{
        opacity: 0,
        m: 1,
        bgcolor: "#fff",
        color: "primary.contrastText",
        "&:hover": {
          transform: "scale(1.1)",
        },
        "@keyframes grow": {
          from: {
            opacity: 0,
            scale: 0,
          },
          to: {
            opacity: 1,
            scale: 1
          }
        },
        animation: `${doAnimate ? `.5s ${props.idx * 100}ms grow forwards`: ""}`
      }}
    />
  );
};

export default SkillChip;
