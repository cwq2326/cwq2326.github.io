import React from "react";
import { Typography } from "@mui/material";

export default function Paragraph(props: any) {
    const paragraphRef = React.useRef(null);
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
      if (paragraphRef.current) observer.observe(paragraphRef.current);
    }, []);

    
  return (
    <React.Fragment>
    <Typography variant="body1" ref={paragraphRef} sx={{
        fontSize: {
            sm: "1rem",
            md: "1.1rem",
            lg: "1.2rem",
        },
        opacity: 0,
        "@keyframes slideUp": {
            from: {
                transform: "translateY(50%)",
                opacity: 0
            },
            to: {
                transform: "translateY(0)",
                opacity: 1
            }
        },
        animation: `${doAnimate ? `.5s .5s slideUp forwards`: ""}`
    }}>
        {props.text}
    </Typography>
        {props.break && <hr />}
        </React.Fragment>
  );
}
