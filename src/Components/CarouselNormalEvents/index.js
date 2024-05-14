import React from 'react';
import { Carousel } from '@material-tailwind/react';
//import { event_cst_1, event_cst_2 } from '../../config/Images/Images';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './style.css';
// const slideImages = [
//   {
//     image: event_cst_1,
//   },
//   {
//     image: event_cst_2,
//   },
// ];

export function CarouselNormalEvents(props) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Carousel
        transition={{ duration: 2 }}
        className="relative"
        autoplay={true}
        loop={true}
      >
        {props.slideImages.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Slide ${index}`}
            className="h-full w-full object-cover object-center"
            // style={{ objectFit: "cover" }}
          />
        ))}
      </Carousel>
      {/* <ProjectCard /> */}
    </Box>
  );
}
