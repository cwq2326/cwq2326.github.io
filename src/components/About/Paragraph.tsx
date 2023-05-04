import { Typography } from '@mui/material';
import React from 'react';

import UseScrollIntoView from '../../hooks/UseScrollIntoView';

type ParagraphProps = {
  text: string;
  break: boolean;
  idx: number;
};

export default function Paragraph(props: ParagraphProps) {
  const paragraphRef = React.useRef<HTMLDivElement | null>(null);
  let doAnimate = UseScrollIntoView(paragraphRef);

  return (
    <React.Fragment>
      <Typography
        variant="body1"
        ref={paragraphRef}
        sx={{
          fontSize: {
            sm: '1rem',
            md: '1.1rem',
            lg: '1.2rem',
          },
          opacity: 0,
          '@keyframes slideUp': {
            from: {
              transform: 'translateY(50%)',
              opacity: 0,
            },
            to: {
              transform: 'translateY(0)',
              opacity: 1,
            },
          },
          animation: `${doAnimate ? `.5s .5s slideUp forwards` : ''}`,
        }}
      >
        {props.text}
      </Typography>
      {props.break && <hr />}
    </React.Fragment>
  );
}
