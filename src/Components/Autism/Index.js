import React from "react";
import {
  Paper,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { group2 } from "../../config/Images/Images";
import { group1 } from "../../config/Images/Images";
import "./style.css";

const Autism = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="autism_body">
      <Paper
        elevation={0}
        sx={{
          p: "20px",
          //   m: "10rem",
          textAlign: "center",
          position: "relative",
          mt: "5rem",
          ml: { lg: "10rem", xs: "0rem" },
          mr: { lg: "10rem", xs: "0rem" },
        }}
      >
        {!isSmallScreen && (
          <Grid
            container
            justifyContent="flex-end"
            alignItems="flex-start"
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              paddingTop: "10px",
              paddingRight: "10px",
            }}
          >
            <img src={group1} alt="" />
          </Grid>
        )}

        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography
              alignItems="center"
              variant="h4"
              gutterBottom
              className="autism_Typography"
              sx={{
                fontSize: {
                  xl: "40px",
                  lg: "40px",
                  md: "39px",
                  sm: "34px",
                  xs: "34px",
                },
              }}
            >
              What is "Autism"
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              className="autism_Typography2"
              variant="body1"
              paragraph
              sx={{
                ml: {
                  lg: "4rem",
                  md: "3rem",
                },
                mr: {
                  lg: "4rem",
                  md: "3rem",
                },

                fontSize: {
                  xl: "30px",
                  lg: "30px",
                  md: "29px",
                  sm: "27px",
                  xs: "23px",
                },
              }}
            >
              Autism – also referred to as autism spectrum disorder –
              constitutes a diverse group of conditions related to the
              development of the brain. Characteristics may be detected in early
              childhood, but autism is often not diagnosed until much later.
            </Typography>
            <Typography
              className="autism_who"
              variant="body1"
              paragraph
              sx={{
                ml: {
                  lg: "4rem",
                  md: "3rem",
                },
                mr: {
                  lg: "4rem",
                  md: "3rem",
                },
              }}
            >
              -World Health Organization-
            </Typography>
            {!isSmallScreen && (
              <Grid container justifyContent="flex-start" alignItems="flex-end">
                <img src={group2} alt="" />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Autism;
