import React, { useState, useRef, useEffect } from 'react';
import { Paper, Grid, Box, Typography } from '@mui/material';
import { event2 } from '../../config/Images/Images';
import { useSpring, animated } from 'react-spring';
const EventLeftPaper = () => {
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
              User-testing workshops
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
              According to the findings from the KIIs and codesign workshops,
              Quicksand Studio has developed prototypes of the awareness
              toolkit, and the prototypes were tested from 30th October to 1st
              November 2023 in Colombo.
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
              There were 3 user-testing workshops; 1 for parents who have
              children with ASD, 1 for frontline healthcare workers, and 1 for
              parents with young children. In parallel to the workshops, there
              were 6 one-to-one sessions to test the prototypes; 3 with parents
              who have children with ASD, 2 with frontline healthcare workers,
              and 1 with a parent who has a child with intellectual disability
              (Down’s syndrome). There were 2 members from the Quicksand Studio
              and 1 member from Sangath, India who participated in person.
            </Typography>
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
              <img src={event2} alt={event2} width="100%" />
            </Box>
          </Grid>
        </Grid>
      </AnimatedPaper>
      {/* <Paper
        elevation={0}
        sx={{
          background: "#8AAC77",
          marginLeft: "10rem",
          borderTopLeftRadius: "40px",
          borderBottomLeftRadius: "40px",
          mb: 3,
          padding: "20px 20px 20px 20px",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            paddingRight: "2rem",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <Grid item xs={12} lg={6} md={12} sm={12} xl={6}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "50px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                paddingLeft: "3rem",
              }}
            >
              User-testing workshops
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "21px",
                paddingLeft: "3rem",
                paddingRight: "3rem",
              }}
            >
              According to the findings from the KIIs and codesign workshops,
              Quicksand Studio has developed prototypes of the awareness
              toolkit, and the prototypes were tested from 30th October to 1st
              November 2023 in Colombo.
            </Typography>
            <br />
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "21px",
                paddingLeft: "3rem",
                paddingRight: "3rem",
              }}
            >
              There were 3 user-testing workshops; 1 for parents who have
              children with ASD, 1 for frontline healthcare workers, and 1 for
              parents with young children. In parallel to the workshops, there
              were 6 one-to-one sessions to test the prototypes; 3 with parents
              who have children with ASD, 2 with frontline healthcare workers,
              and 1 with a parent who has a child with intellectual disability
              (Down’s syndrome). There were 2 members from the Quicksand Studio
              and 1 member from Sangath, India who participated in person.
            </Typography>
          </Grid>{" "}
          <Grid item xs={12} lg={6} md={12} sm={12} xl={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img src={image1} alt="" width="100%" />
            </Box>
          </Grid>{" "}
        </Grid>
      </Paper> */}
    </div>
  );
};

export default EventLeftPaper;
