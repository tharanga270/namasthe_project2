import React, { useState, useRef, useEffect } from 'react';
import { Paper, Grid, Box, Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { CarouselNormalEvents } from '../CarouselNormalEvents';
import {
  event_autism_awar_1,
  event_autism_awar_2,
  event_autism_awar_3,
} from '../../config/Images/Images';

const EventAutismAwareness = () => {
  const slideImages = [
    {
      image: event_autism_awar_1,
    },
    {
      image: event_autism_awar_2,
    },
    {
      image: event_autism_awar_3,
    },
  ];
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
          background: 'rgb(170, 122, 255)',
          // marginLeft: {
          //   xl: '10rem',
          //   lg: '9rem',
          //   md: '6rem',
          //   sm: '4rem',
          //   xs: '1px',
          // },
          marginRight: {
            xl: '10rem',
            lg: '9rem',
            md: '6rem',
            sm: '4rem',
            xs: '1px',
          },
          // borderTopLeftRadius: '40px',
          // borderBottomLeftRadius: '40px',
          borderTopRightRadius: '40px',
          borderBottomRightRadius: '40px',
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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
              }}
            >
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
                Autism friendly movie screening for Autism Awareness Month 2024
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
                This year, the Sri Lanka College of Pediatricians (SLCP) and the
                Family Health Bureau (FHB), in partnership with NAMASTE Sri
                Lanka - Neurodevelopment and Autism in South Asia: Treatment and
                Evidence, hosted an autism-friendly movie screening. By
                highlighting this event our goal was to make people aware about
                autism and individuals with autism where they are fully
                supported, championed, and celebrated, with the ultimate aim of
                achieving true acceptance.
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
              >
                Throughout the month, the SLCP and FHB collaborated to support
                the NAMASTE team to raise awareness on autism within the
                community. This ongoing effort included multiple initiatives
                designed to educate the public on autism and guide them to
                access appropriate services.
              </Typography>
            </Box>
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
              {/* <img src={event6} alt={event6} width="100%" /> */}
              <CarouselNormalEvents slideImages={slideImages} />
            </Box>
          </Grid>
        </Grid>
      </AnimatedPaper>
    </div>
  );
};

export default EventAutismAwareness;
