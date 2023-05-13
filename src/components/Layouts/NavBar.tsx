import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Link, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

import BasicModal from './BasicModal';

const navigations = ['About', 'Experiences', 'Projects', 'Skills'];

export default function NavBar() {
  const [width, setWidth] = React.useState<number>(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.addEventListener('resize', (e) => {
      if (e.target instanceof Window) {
        setWidth(e.target.window.innerWidth);
      }
    });

    return () => {
      // do nothing.
    };
  }, []);

  function handleClick(id: string) {
    setIsMenuOpen(false);
    window.location.href = id;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <BasicModal isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
        <Stack spacing={2} divider={<Divider flexItem />} alignItems={'center'}>
          <Typography onClick={handleClick.bind(null, '#aboutme')}>
            About
          </Typography>
          <Typography onClick={handleClick.bind(null, '#projects')}>
            Projects
          </Typography>
          <Typography onClick={handleClick.bind(null, '#skills')}>
            Skills
          </Typography>
        </Stack>
      </BasicModal>
      <AppBar position="fixed" sx={{ bgcolor: 'primary.main' }}>
        <Toolbar
          sx={{
            position: 'relative',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            component="div"
            sx={{
              ml: '1rem',
              flexGrow: 1,
              fontSize: { xs: '1.5rem', md: '2rem' },
              position: { xs: 'absolute', sm: 'static' },
            }}
          >
            <Link color="inherit" underline="none" href="#">
              Wen Quan
            </Link>
          </Typography>
          <Stack
            sx={{ mr: '1rem' }}
            direction={'row'}
            spacing={2}
            divider={
              <Divider
                flexItem
                orientation="vertical"
                sx={{ bgcolor: 'white' }}
              />
            }
          >
            {width > 576 &&
              navigations.map((el: string, idx: number) => (
                <Typography
                  sx={{
                    fontSize: {
                      sm: '1rem',
                      md: '1.2rem',
                      lg: '1.4rem',
                    },
                  }}
                  key={idx}
                >
                  <Link
                    color="inherit"
                    underline="hover"
                    href={`#${el.split(' ').join('').toLowerCase()}`}
                  >
                    {el}
                  </Link>
                </Typography>
              ))}
          </Stack>
          {width <= 576 && (
            <MenuIcon
              onClick={() => {
                setIsMenuOpen(true);
              }}
              sx={{ cursor: 'pointer' }}
            />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
