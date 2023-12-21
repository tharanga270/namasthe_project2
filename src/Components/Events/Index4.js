import React from "react";
import { Paper, Grid, Box, Typography } from "@mui/material";
import { event1 } from "../../config/Images/Images";
const EventLeftPaper2 = () => {
  return (
    <div>
      <Paper
        elevation={0}
        sx={{
          background: "#8AAC77",
          marginLeft: {
            xl: "10rem",
            lg: "9rem",
            md: "6rem",
            sm: "4rem",
            xs: "1px",
          },
          borderTopLeftRadius: "40px",
          borderBottomLeftRadius: "40px",
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
            paddingRight: {
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
          <Grid item xs={12} lg={6} md={12} sm={12} xl={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
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
                }}
              >
                CAB meeting
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
                }}
              >
                Apart from developing the toolkit, we created a Community
                Advisory Board (CAB) with 12 members including parents who have
                children with ASD, adults with ASD, and preschool teachers who
                work with children with ASD and special needs.
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

                  textAlign: {
                    xs: "center",
                    xl: "start",
                    lg: "start",
                    md: "start",
                    sm: "start",
                  },
                }}
              >
                We conducted 2 CAB meetings; in May and October.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} md={12} sm={12} xl={6}>
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
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default EventLeftPaper2;
