import { Box, Stack, Typography } from '@mui/material';

import { experiences } from './data';

function LeftNode(props: any) {
  return (
    <Box sx={{ width: '40rem', border: 'solid purple 2px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: '53%',
          mr: '10rem',
          border: 'red solid 2px',
        }}
      >
        <Box
          sx={{
            height: '4rem',
            border: 'orange solid 2px',
            position: 'static',
          }}
        >
          <Stack alignItems={'center'}>
            <Typography fontSize={'1rem'} variant="subtitle1">
              {props.company}
            </Typography>
            <Typography fontSize={'.5rem'} variant="body1">
              {props.title}
            </Typography>
          </Stack>
        </Box>

        <Box sx={{ bgcolor: 'orange', height: '.5rem', width: '6rem' }}></Box>
        <Box
          sx={{
            bgcolor: 'orange',
            height: '3rem',
            minWidth: '3rem',
            borderRadius: '50%',
          }}
        ></Box>
      </Box>
    </Box>
  );
}

function RightNode(props: any) {
  return (
    <Box sx={{ width: '40rem' }}>
      <Box
        sx={{ display: 'flex', alignItems: 'center', width: '53%', ml: '46%' }}
      >
        <Box
          sx={{
            bgcolor: '#d99058',
            height: '3rem',
            minWidth: '3rem',
            borderRadius: '50%',
          }}
        ></Box>
        <Box sx={{ bgcolor: '#d99058', height: '.5rem', width: '6rem' }}></Box>
        <Box sx={{ height: '4rem', border: '#d99058 solid 2px' }}>
          <Stack alignItems={'center'}>
            <Typography fontSize={'1rem'} variant="subtitle1">
              {props.company}
            </Typography>
            <Typography fontSize={'.5rem'} variant="body1">
              {props.title}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

function Connector() {
  return (
    <Box sx={{ height: '3rem', width: '.5rem', bgcolor: 'orangered' }}></Box>
  );
}

export default function Nodes() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem 0',
      }}
    >
      {experiences.map((el, idx) => {
        if (idx % 2 == 0) {
          return (
            <>
              {idx !== 0 && <Connector />}
              <LeftNode title={el.title} company={el.company} />
            </>
          );
        } else {
          return (
            <>
              {idx !== 0 && <Connector />}
              <RightNode title={el.title} company={el.company} />
            </>
          );
        }
      })}
    </Box>
  );
}
