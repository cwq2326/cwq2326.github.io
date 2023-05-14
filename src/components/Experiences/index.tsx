import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

import { experiences } from '../../data';
import BasicModal from '../Layouts/BasicModal';
import Section from '../Layouts/Section';

export default function Index() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [completed] = React.useState<Record<number, boolean>>({});
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const isModalOpen = useMediaQuery(theme.breakpoints.down('md'));

  const handleStep = (step: number) => () => {
    setActiveStep(step);
    console.log(isModalOpen);
    isModalOpen && setIsMenuOpen(true);
  };

  return (
    <Section title="EXPERIENCES" id="experiences">
      {isModalOpen && (
        <BasicModal isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
          <Typography variant="body1">
            {experiences[activeStep].description}
          </Typography>
        </BasicModal>
      )}
      <Box sx={{ width: '100%' }}>
        <Stepper
          nonLinear
          activeStep={activeStep}
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            rowGap: '.5rem',
            '& .MuiStepLabel-label': {
              color: 'primary.contrastText',
            },
            '& .MuiStepLabel-label.Mui-active': {
              p: '.5rem',
              borderRadius: '3px',
              bgcolor: 'rgba(0, 0, 0, .1)',
              color: 'primary.contrastText',
            },
          }}
        >
          {experiences.map((el, index) => (
            <Step key={index} completed={completed[index]}>
              <StepButton onClick={handleStep(index)}>
                <Stack>
                  <Typography variant="subtitle1">{el.company}</Typography>
                  <Typography variant="subtitle2">{el.title}</Typography>
                  <Typography variant="subtitle2">{`${el.start.toLocaleString(
                    'en-us',
                    { month: 'short', year: 'numeric' }
                  )} -
              ${
                el.end instanceof Date
                  ? el.end.toLocaleString('en-us', {
                      month: 'short',
                      year: 'numeric',
                    })
                  : 'Present'
              }`}</Typography>
                </Stack>
              </StepButton>
              {index < experiences.length - 1 && (
                <Box
                  sx={{
                    height: '2rem',
                    width: '.15rem',
                    bgcolor: '#ccc',
                    mx: 'auto',
                    mt: '1rem',
                    display: {
                      xs: 'block',
                      md: 'none',
                    },
                  }}
                ></Box>
              )}
            </Step>
          ))}
        </Stepper>
        <Typography
          variant="body1"
          sx={{
            mt: '3rem',
            textAlign: 'center',
            display: {
              xs: 'none',
              md: 'block',
            },
          }}
        >
          {experiences[activeStep].description}
        </Typography>
      </Box>
    </Section>
  );
}
