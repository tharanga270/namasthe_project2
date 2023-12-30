import React from "react";
import { Carousel } from "@material-tailwind/react";
import { Carousel1, Carousel2, Carousel3 } from "../../config/Images/Images";
// import Carousel1 from "../../Common/Assets/Images/Property1.svg";
// import Carousel2 from "../../Common/Assets/Images/Property2.svg";
// import Carousel3 from "../../Common/Assets/Images/Property3.svg";
import Box from "@mui/material/Box";
import ProjectCard from "../Card/Index";
// import { Typography } from "@material-tailwind/react";
import Typography from "@mui/material/Typography";
import "./style.css";
const slideImages = [
  {
    image: Carousel3,
    content: {
      heading: "NAMASTE Srilanka",

      paragraph: "Neurodevelopment and Autism in South Asia:",
      paragraph2: "Treatment and Evidence.",
    },
  },
  {
    image: Carousel1,
    content: {
      heading: "NAMASTE Srilanka",

      paragraph: "Neurodevelopment and Autism in South Asia:",
      paragraph2: "Treatment and Evidence.",
    },
  },
  {
    image: Carousel2,
    content: {
      heading: "NAMASTE Srilanka",
      paragraph: "Neurodevelopment and Autism in South Asia:",
      paragraph2: "Treatment and Evidence.",
    },
  },
];

export function CarouselTransition() {
  return (
    <Box sx={{ position: "relative" }}>
      <Carousel
        transition={{ duration: 2 }}
        className="rounded-xl relative"
        autoplay={true}
        loop={true}
      >
        {slideImages.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Slide ${index}`}
            className="h-full w-full rounded-lg object-cover object-center"
            // style={{ objectFit: "cover" }}
          />
        ))}
      </Carousel>
      {slideImages.map((slide, index) => (
        <Box
          sx={{
            position: "absolute",
            top: { xl: "33%", lg: "30%", md: "25%", sm: "12%", xs: "8%" },
            marginLeft: {
              xl: "6rem",
              lg: "6rem",
              md: "4rem",
              sm: "4rem",
              xs: "3rem",
            },
            display: "flex",
            alignItems: "center",
          }}
        >
          <figcaption key={index}>
            <div key={index}>
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  textShadow: "6px 6px 20px rgba(0, 0, 0, 0.40)",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: {
                    xl: "600",
                    lg: "600",
                    md: "600",
                    sm: "600",
                    xs: "400",
                  },
                  fontSize: {
                    xl: "80px",
                    lg: "75px",
                    md: "60px",
                    sm: "38px",
                    xs: "17px",
                  },
                }}
              >
                {slide.content.heading}
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  textAlign: "left",
                  color: "#fff",
                  fontFamily: "Poppins, sans-serif",
                  textShadow: "6px 6px 20px rgba(0, 0, 0, 0.40)",
                  fontWeight: {
                    xl: "600",
                    lg: "600",
                    md: "600",
                    sm: "600",
                    xs: "400",
                  },
                  fontSize: {
                    xl: "32px",
                    lg: "30px",
                    md: "25px",
                    sm: "19px",
                    xs: "12px",
                  },
                }}
              >
                {slide.content.paragraph} <br />
                {slide.content.paragraph2}
              </Typography>
            </div>
          </figcaption>
        </Box>
      ))}
      <ProjectCard />
    </Box>
  );
}
