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
import CardMedia from "@mui/material/CardMedia";
const images = {
  image1: { image: detection1, text: " Detection workstream" },
  image2: { image: intervention1, text: "Intervention workstream" },
  image3: { image: engagement1, text: "Capacity building workstream" },
  image4: {
    image: community1,
    text: "Community Engagement and Involvement workstream",
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
          ml: { lg: "4rem", xl: "12rem", md: "4rem", sm: "0rem", xs: "0rem" },
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
            {/* detection */}
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                  lg: "flex-start",
                  sm: "center",
                },
                mb: { xs: "2rem", sm: "2rem", lg: "0", md: "0" },
              }}
            >
              <Box
                sx={{
                  display: {
                    xl: "flex",
                    lg: "flex",
                    md: "flex",
                    sm: "block",
                    xs: "block",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  height: "140px",
                  textAlign: {
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  className="imageContainer"
                  image={images.image1.image}
                  alt={images.image1.image}
                  sx={{
                    border: "3px solid #769863",
                    borderRadius: "15px",
                    height: "100px",
                    width: "100px",
                    margin: "auto",
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      paddingLeft: { xs: 2 },
                      textAlign: {
                        xs: "center",
                        sm: "center",
                        md: "left",
                        lg: "left",
                        xl: "left",
                      },
                      fontSize: "24px",
                      fontWeight: "300",
                      fontFamily: "Poppins, sans-serif",
                      mt: { lg: 0, md: 0, sm: 2, xs: 2 },
                    }}
                  >
                    {images.image1.text}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item lg={5} md={6} sm={12} xs={12}>
            {/* engagement */}
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                  lg: "flex-start",
                  sm: "center",
                },
                mb: { xs: "2rem", sm: "2rem", lg: "0", md: "0" },
              }}
            >
              <Box
                sx={{
                  display: {
                    xl: "flex",
                    lg: "flex",
                    md: "flex",
                    sm: "block",
                    xs: "block",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  height: "140px",
                  textAlign: {
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  className="imageContainer"
                  image={images.image3.image}
                  alt={images.image3.image}
                  sx={{
                    border: "3px solid #769863",
                    borderRadius: "15px",
                    height: "100px",
                    width: "100px",
                    margin: "auto",
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      paddingLeft: { xs: 2 },
                      textAlign: {
                        xs: "center",
                        sm: "center",
                        md: "left",
                        lg: "left",
                        xl: "left",
                      },
                      fontSize: "24px",
                      fontWeight: "300",
                      fontFamily: "Poppins, sans-serif",
                      mt: { lg: 0, md: 0, sm: 2, xs: 2 },
                    }}
                  >
                    {images.image3.text}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item lg={5} md={6} sm={12} xs={12}>
            {/* community */}
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                  lg: "flex-start",
                  sm: "center",
                },
                mb: { xs: "2rem", sm: "2rem", lg: "0", md: "0" },
              }}
            >
              <Box
                sx={{
                  display: {
                    xl: "flex",
                    lg: "flex",
                    md: "flex",
                    sm: "block",
                    xs: "block",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  height: "140px",
                  textAlign: {
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  className="imageContainer"
                  image={images.image4.image}
                  alt={images.image4.image}
                  sx={{
                    border: "3px solid #769863",
                    borderRadius: "15px",
                    height: "100px",
                    width: "100px",
                    margin: "auto",
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      paddingLeft: { xs: 2 },
                      textAlign: {
                        xs: "center",
                        sm: "center",
                        md: "left",
                        lg: "left",
                        xl: "left",
                      },
                      fontSize: "24px",
                      fontWeight: "300",
                      fontFamily: "Poppins, sans-serif",
                      mt: { lg: 0, md: 0, sm: 2, xs: 2 },
                    }}
                  >
                    {images.image4.text}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item lg={5} md={6} sm={12} xs={12}>
            {/* inter */}
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                  lg: "flex-start",
                  sm: "center",
                },
                mb: { xs: "2rem", sm: "2rem", lg: "0", md: "0" },
              }}
            >
              <Box
                sx={{
                  display: {
                    xl: "flex",
                    lg: "flex",
                    md: "flex",
                    sm: "block",
                    xs: "block",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  height: "140px",
                  textAlign: {
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  className="imageContainer"
                  image={images.image2.image}
                  alt={images.image2.image}
                  sx={{
                    border: "3px solid #769863",
                    borderRadius: "15px",
                    height: "100px",
                    width: "100px",
                    margin: "auto",
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      paddingLeft: { xs: 2 },
                      textAlign: {
                        xs: "center",
                        sm: "center",
                        md: "left",
                        lg: "left",
                        xl: "left",
                      },
                      fontSize: "24px",
                      fontWeight: "300",
                      fontFamily: "Poppins, sans-serif",
                      mt: { lg: 0, md: 0, sm: 2, xs: 2 },
                    }}
                  >
                    {images.image2.text}
                  </Typography>
                </Box>
              </Box>
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
        Community Advisory Board Community
      </Typography>
    </div>
  );
};

export default WeDo;
