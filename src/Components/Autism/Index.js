import React from "react";
import {
  Paper,
  Typography,

  Box,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import { project4, project5 } from "../../config/Images/Images";
import "./style.css";

const autoismData = [
  {
    id: 1,
    image: project4,
    text1:
      "Autism might mean having a unique perspective on the world, seeing and feeling things differently. It's their way, which can be a thing of beauty. It could be a superpower, enabling them to see the world's splendor from a whole new angle!",
    text2: "-Parent of an autistic child-",
  },
  {
    id: 2,
    image: project5,
    text1:
      "Autism – also referred to as autism spectrum disorder – constitutes a diverse group of conditions related to the development of the brain. Characteristics may be detected in early childhood, but autism is often not diagnosed until much later.",
    text2: " -World Health Organization-",
  },
];
const Autism = () => {



  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          marginTop: "10%",
        }}
      >
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
          What is "Autism" ?
        </Typography>
      </div>
      <Box
        sx={{
          maxWidth: "150rem",
          p: 2,
          mt: "2%",
        }}
      >
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={10000}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          containerClass="carousel-container"
        >
          {autoismData.map((data, index) => (
            <Paper
              elevation={0}
              sx={{
                ml: { lg: "10rem", xs: "0rem" },
                mr: { lg: "10rem", xs: "0rem" },
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={data.image} alt={`card${index + 1}`} />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
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
                      sm: "25px",
                      xs: "20px",
                    },
                    color:
                      index === 0 ? "green" : index === 1 ? "blue" : "black",
                  }}
                >
                  {data.text1}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
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
                  {data.text2}
                </Typography>
              </div>
            </Paper>
          ))}
          {/* #2 content come here */}
        </Carousel>
      </Box>
    </>
  );
};

export default Autism;
