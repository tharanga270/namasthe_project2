import Paper from "@mui/material/Paper";
import { card1 } from "../../config/Images/Images";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import { Typography } from "@mui/material";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";

const cardData = [
  {
    image: card1,
    text: "where entrepreneurs can easily find the right design for their company. The book cover for us was a very important part of the success of the book. Therefore, we entrusted this to experts and ended up being very happy with the result.",
    authors: "Val Racheeva + Maxi Knust",
    location: "Co-authors, Germany",
  },
  {
    image: card1,
    text: "where entrepreneurs can easily find the right design for their company. The book cover for us was a very important part of the success of the book. Therefore, we entrusted this to experts and ended up being very happy with the result.",
    authors: "Val Racheeva + Maxi Knust",
    location: "Co-authors, Germany",
  },
  {
    image: card1,
    text: "where entrepreneurs can easily find the right design for their company. The book cover for us was a very important part of the success of the book. Therefore, we entrusted this to experts and ended up being very happy with the result.",
    authors: "Val Racheeva + Maxi Knust",
    location: "Co-authors, Germany",
  },
  {
    image: card1,
    text: "where entrepreneurs can easily find the right design for their company. The book cover for us was a very important part of the success of the book. Therefore, we entrusted this to experts and ended up being very happy with the result.",
    authors: "Val Racheeva + Maxi Knust",
    location: "Co-authors, Germany",
  },
  {
    image: card1,
    text: "where entrepreneurs can easily find the right design for their company. The book cover for us was a very important part of the success of the book. Therefore, we entrusted this to experts and ended up being very happy with the result.",
    authors: "Val Racheeva + Maxi Knust",
    location: "Co-authors, Germany",
  },
  {
    image: card1,
    text: "where entrepreneurs can easily find the right design for their company. The book cover for us was a very important part of the success of the book. Therefore, we entrusted this to experts and ended up being very happy with the result.",
    authors: "Val Racheeva + Maxi Knust",
    location: "Co-authors, Germany",
  },
];

const CabCommunity = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Paper
      elevation={0}
      sx={{
        maxWidth: "200rem",
        ml: { lg: "6rem", md: "2rem", sm: 0, xs: 0 },
        mr: { lg: "6rem", md: "2rem", sm: 0, xs: 0 },
        p: 2,
      }}
      style={{ marginTop: "10%" }}
    >
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        containerClass="carousel-container"
      >
        {cardData.map((data, index) => (
          <Card
            className="mt-6 w-96 text-lightblack shadow-md"
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "100%",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={data.image} alt={`card${index + 1}`} width="174" />
            </div>
            <CardBody style={{ textAlign: "center" }}>
              <Typography
                sx={{ fontSize: 16, fontWeight: 500, color: "#343434" }}
              >
                {data.text}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0" style={{ textAlign: "center" }}>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "16px",
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                {data.authors} <br /> {data.location}
              </Typography>
            </CardFooter>
          </Card>
        ))}
      </Carousel>
    </Paper>
  );
};

export default CabCommunity;
