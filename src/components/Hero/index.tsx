import WavingHandIcon from '@mui/icons-material/WavingHand';
import { Box, Divider, Typography } from '@mui/material';

export default function index() {
  return (
    <Box
      sx={{
        mx: 'auto',
        mt: {
          xs: '-5rem',
          sm: '0',
        },
        display: 'flex',
        alignItems: 'center',
        p: '2rem',
        color: 'primary.contrastText',
        width: {
          xs: '18rem',
          sm: '28rem',
          md: '38rem',
          lg: '58rem',
        },
        height: '100vh',
      }}
    >
      <Box flex={1}>
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: '2rem',
              sm: '3rem',
              md: '4rem',
              lg: '5rem',
            },
            '@keyframes slideUp': {
              from: {
                opacity: 0,
                transform: 'translateY(50%)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
            animation: '.5s slideUp forwards',
          }}
        >
          Hi there!
          <WavingHandIcon
            fontSize="inherit"
            sx={{
              '@keyframes wave': {
                '0%': {
                  transform: 'rotate(-10deg)',
                },

                '50%': {
                  transform: 'rotate(10deg)',
                },

                '100%': {
                  transform: 'rotate(-10deg)',
                },
              },
              animation: ' wave 1s infinite ',
              paddingLeft: '1rem',
            }}
          />
        </Typography>
        <Typography
          sx={{
            opacity: 0,
            fontSize: {
              xs: '2.5rem',
              sm: '4rem',
              md: '5rem',
              lg: '6rem',
            },

            '@keyframes slideUp': {
              from: {
                opacity: 0,
                transform: 'translateY(50%)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
            animation: '.5s .5s slideUp forwards',
          }}
        >
          <Typography
            sx={{
              display: 'inline-block',
              fontSize: {
                xs: '1.5rem',
                sm: '2rem',
                md: '3rem',
                lg: '4rem',
              },
              pr: '1rem',
            }}
          >
            I'm
          </Typography>
          Wen Quan
        </Typography>
        <Divider
          sx={{
            opacity: 0,
            '@keyframes grow': {
              from: {
                opacity: 0,
                transform: 'scale(0)',
              },
              to: {
                opacity: 1,
                transform: 'scale(1)',
              },
            },
            animation: '.5s 1s grow forwards',
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: {
                xs: '.65rem',
                sm: '1rem',
                md: '1.1rem',
                lg: '1.2rem',
              },
            }}
          >
            I'm an aspiring Full Stack Developer
          </Typography>
        </Divider>
      </Box>
    </Box>
  );
}
