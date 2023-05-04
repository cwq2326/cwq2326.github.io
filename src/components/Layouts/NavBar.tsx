import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Link, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

import BasicModal from './BasicModal';

const navigations = ['About Me', 'Projects', 'Skills'];

export default function NavBar() {
  const [width, setWidth] = React.useState<number>(window.innerWidth);
  const [isMenuOpen, setisMenuOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.addEventListener('resize', (e) => {
      if (e.target instanceof Window) {
        setWidth(e.target.window.innerWidth);
      }
    });

    return () => {};
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <BasicModal isOpen={isMenuOpen} setIsMenuOpen={setisMenuOpen} />
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
              fontSize: { xs: '1.5rem', sm: '2rem' },
              position: { xs: 'absolute', sm: 'static' },
            }}
          >
            <Link
            color="inherit"
            underline="none"
            href="#"
            >
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
                <Typography sx={{ fontSize: '1.2rem' }} key={idx}>
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
          {width <= 576 && <MenuIcon onClick={() => setisMenuOpen(true)} />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
