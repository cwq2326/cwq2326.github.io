import { Avatar, Box, IconButton } from '@mui/material';

import { socials } from '../../data';

export default function FloatingButtons() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'rgba(0,0,0,0%)',
        position: 'fixed',
        bottom: '10%',
        left: '1%',
        visibility: {
          xs: 'hidden',
          sm: 'visible',
        },
      }}
    >
      {socials.map((el, idx: number) => (
        <IconButton target="__blank" href={el.link} key={idx}>
          <Avatar
            src={el.icon}
            variant="square"
            sx={{ height: '2rem', width: '2rem' }}
          />
        </IconButton>
      ))}
    </Box>
  );
}
