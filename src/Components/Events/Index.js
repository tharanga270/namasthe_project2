import React from "react";
import { Paper, Grid, Box, Typography } from "@mui/material";
import image1 from "../../Common/Assets/Images/imag1.JPG";
const EventLeftPaper = () => {
  return (
    <div>
      <Paper
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
      </Paper>
    </div>
  );
};

export default EventLeftPaper;
