import React from "react";
import { Paper, Grid, Box, Typography } from "@mui/material";
import image1 from "../../Common/Assets/Images/imag1.JPG";
const EventRightPaper2 = () => {
  return (
    <div>
      <Paper
        elevation={0}
        sx={{
          background: "rgb(170, 122, 255)",
          marginRight: "10rem",
          borderTopRightRadius: "40px",
          borderBottomRightRadius: "40px",
          mb: 3,
          padding: "20px 20px 20px 20px",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            paddingLeft: "2rem",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <Grid item xs={12} lg={6} md={6} sm={12} xl={6}>
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
          <Grid item xs={12} lg={6} md={6} sm={12} xl={6} sx={{}}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "50px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                paddingLeft: "3rem",
              }}
            >
              Key-Informative Interviews (Klls) <br />
              and co-design workshops
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "21px",
                paddingLeft: "3rem",
                paddingRight: "2rem",
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
                fontSize: "21px",
                paddingLeft: "3rem",
                paddingRight: "2rem",
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

export default EventRightPaper2;
