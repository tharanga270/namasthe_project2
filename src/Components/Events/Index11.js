import React, { useState, useRef, useEffect } from 'react';
import { Paper, Grid, Box, Typography } from '@mui/material';
import { event_ird_1 } from '../../config/Images/Images';
import { useSpring, animated } from 'react-spring';
const EventIRD = () => {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef(null);

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
  });

  const handleScroll = () => {
    const top = ref.current.getBoundingClientRect().top;
    const isVisible = top < window.innerHeight * 0.75;

    setVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const AnimatedPaper = animated(Paper);
  return (
    <div ref={ref}>
      <AnimatedPaper
        style={props}
        elevation={0}
        sx={{
          background: '#8AAC77',
          marginLeft: {
            xl: '10rem',
            lg: '9rem',
            md: '6rem',
            sm: '4rem',
            xs: '1px',
          },
          borderTopLeftRadius: '40px',
          borderBottomLeftRadius: '40px',
          mb: 7,
          paddingTop: '20px ',
          paddingBottom: '20px',
          paddingLeft: {
            xl: '20px ',
            lg: '20px',
            md: '15px',
            sm: '12px',
            xs: '6px',
          },
          paddingRight: {
            xl: '20px ',
            lg: '20px',
            md: '15px',
            sm: '12px',
            xs: '6px',
          },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            paddingRight: {
              xl: '2rem',
              lg: '2rem',
              md: '2rem',
              sm: '1rem',
              xs: '0rem',
            },
            paddingTop: '2rem',
            paddingBottom: '2rem',
          }}
        >
          <Grid item xs={12} lg={6} md={12} sm={12} xl={6}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: {
                  xl: '52px',
                  lg: '47px',
                  md: '47px',
                  sm: '30px',
                  xs: '25px',
                },
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                paddingLeft: {
                  xl: '3rem',
                  lg: '3rem',
                  md: '2rem',
                  sm: '2rem',
                  xs: '0rem',
                },
                textAlign: {
                  xs: 'center',
                  xl: 'start',
                  lg: 'start',
                  md: 'start',
                  sm: 'start',
                },
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              IRD Bioethics course for capacity building
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: {
                  xl: '21px',
                  lg: '21px',
                  md: '21px',
                  sm: '18px',
                  xs: '15px',
                },
                paddingLeft: {
                  xl: '3rem',
                  lg: '3rem',
                  md: '2rem',
                  sm: '2rem',
                  xs: '0rem',
                },
                textAlign: {
                  xs: 'center',
                  xl: 'start',
                  lg: 'start',
                  md: 'start',
                  sm: 'start',
                },
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              {/* On the 2nd of April 2023 Team namaste took a step to Light of the
              Lotus Tower to blue in representation of the World Autism Day, to
              spread awareness to the wider public. This day remarks the
              establishment of the Namaste project in Sri Lanka as well. */}
            </Typography>
            <br />
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: {
                  xl: '21px',
                  lg: '21px',
                  md: '21px',
                  sm: '18px',
                  xs: '15px',
                },
                paddingLeft: {
                  xl: '3rem',
                  lg: '3rem',
                  md: '2rem',
                  sm: '2rem',
                  xs: '0rem',
                },
                textAlign: {
                  xs: 'center',
                  xl: 'start',
                  lg: 'start',
                  md: 'start',
                  sm: 'start',
                },
                fontFamily: 'Poppins, sans-serif',
              }}
            ></Typography>
          </Grid>
          <Grid item xs={12} lg={6} md={12} sm={12} xl={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
                mt: { lg: '7rem', xl: '0', md: '0', xs: '0' },
                mb: { lg: '7rem', xl: '0', md: '0', xs: '0' },
              }}
            >
              <img src={event_ird_1} alt={event_ird_1} width="100%" />
            </Box>
          </Grid>
        </Grid>
      </AnimatedPaper>
    </div>
  );
};

export default EventIRD;
