import { Avatar, Chip } from '@mui/material';
import React from 'react';

import UseScrollIntoView from '../../hooks/UseScrollIntoView';

type SkillChipProps = {
  name: string;
  icon?: string;
  idx: number;
};

const SkillChip = (props: SkillChipProps) => {
  const chipRef = React.useRef<HTMLDivElement | null>(null);
  let doAnimate = UseScrollIntoView(chipRef);

  return (
    <Chip
      ref={chipRef}
      label={props.name}
      variant="outlined"
      avatar={<Avatar src={props.icon} />}
      sx={{
        opacity: 0,
        m: 1,
        bgcolor: '#fff',
        color: 'primary.contrastText',
        '&:hover': {
          transform: 'scale(1.1)',
        },
        '@keyframes grow': {
          from: {
            opacity: 0,
            scale: 0,
          },
          to: {
            opacity: 1,
            scale: 1,
          },
        },
        animation: `${
          doAnimate ? `.5s ${props.idx * 100}ms grow forwards` : ''
        }`,
      }}
    />
  );
};

export default SkillChip;
