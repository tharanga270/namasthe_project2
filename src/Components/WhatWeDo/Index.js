import React from "react";
import {
  detection1,
  intervention1,
  engagement1,
  community1,
} from "../../config/Images/Images";
import Grid from "@mui/material/Grid";
import { Typography, Box } from "@mui/material";
import "./style.css";

const images = {
  image1: { image: detection1, text: " Detection workstream" },
  image2: { image: intervention1, text: "Implementation workstream" },
  image3: { image: engagement1, text: "Capacity building workstream" },
  image4: {
    image: community1,
    text: "Community Engagement and Inclusion workstream",
  },
};
const WeDo = () => {
  return (
    <div
      style={{ textAlign: "center", marginTop: "5rem" }}
      className="cylinder-background"
    >
      <Typography
        variant="h2"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Poppins, sans-serif",
          fontWeight: "700",
          fontSize: { lg: "70px", sm: "70px", xs: "40px" },
          mb: "5% ",
        }}
      >
        What we do
      </Typography>
      <Box
        sx={{
          ml: { lg: "15rem", xl: "25rem", md: "15rem", sm: "5rem", xs: "2rem" },
        }}
      >
        <Grid
          container
          spacing={2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item lg={5} md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "flex-start",
                  md: "flex-start",
                  lg: "flex-start",
                  sm: "flex-start",
                },
                mr: {
                  xs: "2rem",
                },
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "140px",
                }}
              >
                <img
                  src={images.image1.image}
                  alt={images.image1.text}
                  className="imageContainer"
                  style={{
                    border: "3px solid #769863",
                    borderRadius: "15px",
                    height: "100px",
                    width: "100px",
                  }}
                />{" "}
                <Typography
                  sx={{
                    paddingLeft: { xs: 2 },
                    textAlign: { xs: "left", lg: "left" },
                    fontSize: "24px",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {images.image1.text}
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item lg={5} md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "flex-start",
                  md: "flex-start",
                  lg: "flex-start",
                  sm: "flex-start",
                },
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "140px",
                }}
              >
                <img
                  src={images.image3.image}
                  alt={images.image3.text}
                  className="imageContainer"
                  style={{
                    border: "3px solid #769863",
                    borderRadius: "15px",
                    height: "100px",
                    width: "100px",
                  }}
                />{" "}
                <Typography
                  sx={{
                    paddingLeft: { xs: 2 },
                    textAlign: { xs: "left", lg: "left" },
                    fontSize: "24px",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {images.image3.text}
                </Typography>
              </div>
            </Box>
          </Grid>

          <Grid item lg={5} md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "flex-start",
                  md: "flex-start",
                  lg: "flex-start",
                  sm: "flex-start",
                },
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "140px",
                }}
              >
                <img
                  src={images.image4.image}
                  alt={images.image4.text}
                  className="imageContainer"
                  style={{
                    border: "3px solid #769863",
                    borderRadius: "15px",
                    height: "100px",
                    width: "100px",
                  }}
                />

                <Typography
                  sx={{
                    paddingLeft: { xs: 2 },
                    textAlign: { xs: "left", lg: "left" },
                    fontSize: "24px",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {images.image4.text}
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item lg={5} md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "flex-start",
                  md: "flex-start",
                  lg: "flex-start",
                  sm: "flex-start",
                },
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "140px",
                }}
              >
                <img
                  src={images.image2.image}
                  alt={images.image2.text}
                  className="imageContainer"
                  style={{
                    border: "3px solid #769863",
                    borderRadius: "15px",
                    height: "100px",
                    width: "100px",
                  }}
                />{" "}
                <Typography
                  sx={{
                    paddingLeft: { xs: 2 },
                    textAlign: { xs: "left", lg: "left" },
                    fontSize: "24px",
                    fontWeight: "300",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {" "}
                  {images.image2.text}
                </Typography>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Typography
        variant="h1"
        sx={{
          mb: 6,
          mt: { lg: 20, md: 20, sm: 7, xs: 7 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "700",
          fontSize: { lg: "70px", sm: "70px", xs: "40px" },
          fontFamily: "Poppins, sans-serif",
        }}
      >
        CAB Community
      </Typography>
    </div>
  );
};

export default WeDo;
