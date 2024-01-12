import Paper from "@mui/material/Paper";
import { card1, card01, card02 } from "../../config/Images/Images";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import { Typography } from "@mui/material";
import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import { useState } from "react";

const cardData = [
  {
    id: 1,
    image: card01,
    text2:
      "The project NAMASTE is an important project that will help families of children with Autism. In a developing country like SL the project will lead the path way to a more social model in accepting and including people with different abilities to build an inclusive society.",
    authors: "Malathi Kahandaliyanage",
    location: "Parent of a child with autism",
  },

  {
    id: 2,
    image: card02,
    text1:
      '"I do not suffer from Autism, but I do suffer from the way you treat me" - Tyler Durdin',
    text2:
      "There is huge gap between how Autism see thee world and how others do. NAMASTE comes here with a genuine effort to bridge this gap. Raising Awareness is Most wanted in order to change the perception towards Autism here in Sri Lanka. NAMASTE drives the community; To see the deference in a different way. Acceptance, inclusiveness and equal treatment will change the world a better place for Autism.",
    authors: "Rukshini Ferdinando",
    location: "Parent of an autistic child",
  },
  {
    id: 3,
    image: card1,
    text2:
      "where entrepreneurs can easily find the right design for their company. The book cover for us was a very important part of the success of the book. Therefore, we entrusted this to experts and ended up being very happy with the result.",
    authors: "Val Racheeva + Maxi Knust",
    location: "Co-authors, Germany",
  },
];

const CabCommunity = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const handleSeeMoreClick = (index) => {
    setExpandedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 2,
    },
    tablet2: {
      breakpoint: { max: 640, min: 464 },
      items: 1,
      slidesToSlide: 1,
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
        mt: "10%",
      }}
    >
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "tablet2", "mobile", "desktop"]}
        containerClass="carousel-container"
      >
        {cardData.map((data, index) => (
          <Card
            className={`mt-6 w-96 text-lightblack shadow-md ${
              expandedCardIndex === index ? "zoomed-card" : ""
            }`}
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "100%",
              border: "2px solid rgb(200, 122, 255)",
              height: "500px",
              margin: "auto",
            }}
          >
            {(index !== 1 || !expandedCardIndex) && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={data.image}
                  alt={`card${index + 1}`}
                  width="160"
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
              </div>
            )}
            <CardBody style={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#343434",
                  fontStyle: "italic",
                }}
              >
                {data.text1}
              </Typography>

              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#343434",
                  fontStyle: "italic",
                }}
              >
                {expandedCardIndex === index || index === 0 || index === 2
                  ? data.text2
                  : `${data.text2.slice(0, 79)}...`}
              </Typography>
            </CardBody>
            {index === 1 && (
              <CardFooter className="pt-0" style={{ textAlign: "center" }}>
                <button
                  onClick={() => handleSeeMoreClick(index)}
                  style={{ color: "#7CB9E8" }}
                >
                  {expandedCardIndex === index ? "See Less" : "See More"}
                </button>
              </CardFooter>
            )}
            <CardFooter
              className="pt-0"
              style={{
                textAlign: "center",
                position: "absolute",
                bottom: "0",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontStyle: "italic",
                    fontWeight: 800,
                    color: "rgb(170, 122, 255)",
                  }}
                >
                  {data.authors}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontStyle: "italic",
                    fontWeight: 500,
                    color: "#8AAC77",
                  }}
                >
                  {data.location}
                </Typography>
              </div>
            </CardFooter>
          </Card>
        ))}
      </Carousel>
    </Paper>
  );
};

export default CabCommunity;
