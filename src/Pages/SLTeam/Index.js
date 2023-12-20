import React, { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {
  aboutus1,
  email,
  asiri,
  raj,
  chamika,
  hasuni,
  heshali,
  poornima,
  nethma,
  piumi,
  rasika,
  sakuni,
  shashini,
  Shehara,
  yas,
  venura,
  abi,
} from "../../config/Images/Images";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import "./style.css";
const data = [
  {
    id: 1,
    image: asiri,
    name: "Dr. Asiri Hewamalage",
    position: "Principle Investigator",
    email: "asiri11@yahoo.com",
  },
  {
    id: 2,
    image: aboutus1,
    name: "Pat Heffernan",
    position: "President",
    email: "dilvip777@yahoo.com",
  },
  {
    id: 3,
    image: raj,
    name: "Dr Raj Phriyadharshini",
    position: "Research Team Director",
    email: "rajphriya.namaste@gmail.com",
  },
  {
    id: 4,
    image: chamika,
    name: "Chamika Hansamalee",
    position: "Coordinator - Community Engagement",
    position2: "and Involement (CEI)",
    email: "chamikahansamali97@gmail.com",
  },
  {
    id: 5,
    image: hasuni,
    name: "Hasuni Yasora Withana",
    position: "Research Associate",
    email: "hasuni.namaste@gmail.com",
  },
  {
    id: 6,
    image: heshali,
    name: "Heshali De Silva",
    position: "Project Secretary",
    email: "heshali.namaste@gmail.com",
  },
  {
    id: 7,
    image: poornima,
    name: "Poornima Madhubhashini",
    position: "Accountant",
    email: "finance4namaste@gmail.com",
  },
  {
    id: 8,
    image: nethma,
    name: "Nethma Abeysingha",
    position: "Research Associate",
    email: "nethma.malshani@gmail.com",
  },
  {
    id: 9,
    image: piumi,
    name: "Piumi Dolawaththa",
    position: "Research Associate & CST facilitator",
    email: "piumimahinsala123@gmail.com",
  },
  {
    id: 10,
    image: rasika,
    name: "Rasika Haggepola Arachchi",
    position: "Research Associate",
    email: "rasikaa.namaste@gmail.com",
  },
  {
    id: 11,
    image: sakuni,
    name: "Sakuni Hingurangala",
    position: "Direction coordinator",
    email: "sakunisevwadi@gmail.com",
  },

  {
    id: 12,
    image: shashini,
    name: "Shashini Hewavithanagamage",
    position: "Intervention Coordinator",
    email: "shashini.namaste@gmail.com",
  },
  {
    id: 13,
    image: Shehara,
    name: "Shehara Mayadunne",
    position: "Research Associate",
    email: "shehara.namaste@gmail.com",
  },
  {
    id: 14,
    image: yas,
    name: "R. T. S. Yashodha Rajapaksha",
    position: "Research Associate & PASS PLUS Master Trainer",
    position2: "",
    email: "yashodharajapaksha007@gmail.com",
  },
  {
    id: 15,
    image: abi,
    name: "Abirami Thanabalasundaram",
    position: "Research Associate",
    email: "abirami.namaste@gmail.com",
  },
  {
    id: 16,
    image: venura,
    name: "Venura Rathnayaka",
    position: "Data Manager",
    email: "merangavenur@gmail.com",
  },
  {
    id: 17,
    image: aboutus1,
    name: "Vidusha",
    position: "Unknown",
    email: "Vidusha.namaste@gmail.com",
  },
];

const SLTeam = () => {
  const [zoomedIndex, setZoomedIndex] = useState(null);
  const zoomedImageRef = useRef(null);

  const handleImageClick = (index) => {
    setZoomedIndex(index);
  };

  const handleCloseZoom = () => {
    setZoomedIndex(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        zoomedImageRef.current &&
        !zoomedImageRef.current.contains(event.target)
      ) {
        handleCloseZoom();
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "700",
          fontSize: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
          mb: 3,
        }}
      >
        Our Team
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            p: 9,
          }}
        >
          {data.map((member, index) => (
            <Grid
              key={member.id}
              item
              lg={6}
              md={6}
              sm={6}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
              }}
            >
              <div
                ref={zoomedIndex === index ? zoomedImageRef : null}
                style={{
                  cursor: "pointer",
                  transform: zoomedIndex === index ? "scale(1.05)" : "scale(1)",
                }}
              >
                <Box marginBottom="4px" onClick={() => handleImageClick(index)}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      borderRadius: "15px",
                      transition: "transform 0.3s",
                      // cursor: "pointer",
                      // transform:
                      //   zoomedIndex === index ? "scale(1.05)" : "scale(1)",
                    }}
                    // Trigger zoom on image click
                    width="339px"
                    height="512px"
                  />
                </Box>

                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#474747",
                  }}
                >
                  <b>{member.name}</b>
                </p>
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#474747",
                    marginBottom: "2px",
                  }}
                >
                  {member.position}
                  <br />
                  {member.position2}
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#474747",
                  }}
                ></p>
                <a href={`mailto:${member.email}`}>
                  <IconButton className="sl_IconButton">
                    <Tooltip title={member.email} arrow>
                      <img src={email} alt="email" />{" "}
                    </Tooltip>
                  </IconButton>
                </a>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default SLTeam;
