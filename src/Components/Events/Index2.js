import React from "react";
import { Paper, Grid, Box, Typography } from "@mui/material";
import { event1 } from "../../config/Images/Images";
const EventRightPaper = () => {
  return (
    <div>
      <Paper
        elevation={0}
        sx={{
          background: "rgb(170, 122, 255)",
          marginRight: {
            xl: "10rem",
            lg: "9rem",
            md: "6rem",
            sm: "4rem",
            xs: "1px",
          },
          borderTopRightRadius: "40px",
          borderBottomRightRadius: "40px",
          mb: 3,
          paddingTop: "20px ",
          paddingBottom: "20px",
          paddingLeft: {
            xl: "20px ",
            lg: "20px",
            md: "15px",
            sm: "12px",
            xs: "6px",
          },
          paddingRight: {
            xl: "20px ",
            lg: "20px",
            md: "15px",
            sm: "12px",
            xs: "6px",
          },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            paddingLeft: {
              xl: "2rem",
              lg: "2rem",
              md: "2rem",
              sm: "1rem",
              xs: "0rem",
            },
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <Grid
            item
            xs={12}
            lg={6}
            md={12}
            sm={12}
            xl={6}
            sx={{ order: { md: 2, xs: 2, sm: 2 } }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                mt: { lg: "7rem", xl: "0", md: "0", xs: "0" },
                mb: { lg: "7rem", xl: "0", md: "0", xs: "0" },
              }}
            >
              <img src={event1} alt={event1} width="100%" />
            </Box>
          </Grid>{" "}
          <Grid
            item
            xs={12}
            lg={6}
            md={12}
            sm={12}
            xl={6}
            sx={{ order: { md: 1, xs: 1, sm: 1 } }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: {
                  xl: "52px",
                  lg: "47px",
                  md: "47px",
                  sm: "30px",
                  xs: "25px",
                },
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                paddingLeft: {
                  xl: "3rem",
                  lg: "3rem",
                  md: "2rem",
                  sm: "2rem",
                  xs: "0rem",
                },
                textAlign: {
                  xs: "center",
                  xl: "start",
                  lg: "start",
                  md: "start",
                  sm: "start",
                },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Key-Informative Interviews (Klls) and co-design workshops
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: {
                  xl: "21px",
                  lg: "21px",
                  md: "21px",
                  sm: "18px",
                  xs: "15px",
                },
                paddingLeft: {
                  xl: "3rem",
                  lg: "3rem",
                  md: "2rem",
                  sm: "2rem",
                  xs: "0rem",
                },
                textAlign: {
                  xs: "center",
                  xl: "start",
                  lg: "start",
                  md: "start",
                  sm: "start",
                },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              The above activities were completed from 5th June to 8th June 2023
              in Colombo, and there were 11 KIIs (3 parents who have children
              with ASD, 3 adults with ASD, 2 specialist healthcare workers who
              work with children with ASD, and 3 nonspecialist healthcare
              workers) and 2 co-design workshops (1 for parents who have
              children with ASD, 1 for the non-specialist healthcare workers).
            </Typography>
            <br />
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: {
                  xl: "21px",
                  lg: "21px",
                  md: "21px",
                  sm: "18px",
                  xs: "15px",
                },
                paddingLeft: {
                  xl: "3rem",
                  lg: "3rem",
                  md: "2rem",
                  sm: "2rem",
                  xs: "0rem",
                },
                // paddingRight: "2rem",
                textAlign: {
                  xs: "center",
                  xl: "start",
                  lg: "start",
                  md: "start",
                  sm: "start",
                },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              The interview guides were developed through scoping interviews
              done with specialists, parents, and individuals with ASD in each
              country's sites before the KIIs and co-design workshops. Three
              members from Quicksand Studio participated in the KIIs and
              co-design workshops in person
            </Typography>
          </Grid>{" "}
        </Grid>
      </Paper>
    </div>
  );
};

export default EventRightPaper;
