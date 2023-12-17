import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { aboutus, aboutus1, aboutus2, email } from "../../config/Images/Images";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import "./style.css";
const data = [
  {
    id: 1,
    image: aboutus,
    name: "Pat Heffernan",
    position: "President",
    description: "Pat — marketing strategist, writer, and founder of ",
    description1: "Marketing Partners — serves as creative change ",
    description2: "director for our client team. ",
    email: "aaa@gmail.com",
  },
  {
    id: 2,
    image: aboutus1,
    name: "Pat Heffernan",
    position: "President",
    description: "Pat — marketing strategist, writer, and founder of ",
    description1: "Marketing Partners — serves as creative change ",
    description2: "director for our client team. ",
    email: "aaa@gmail.com",
  },
  {
    id: 3,
    image: aboutus2,
    name: "Pat Heffernan",
    position: "President",
    description: "Pat — marketing strategist, writer, and founder of ",
    description1: "Marketing Partners — serves as creative change ",
    description2: "director for our client team. ",
    email: "aaa@gmail.com",
  },
  {
    id: 4,
    image: aboutus,
    name: "Pat Heffernan",
    position: "President",
    description: "Pat — marketing strategist, writer, and founder of ",
    description1: "Marketing Partners — serves as creative change ",
    description2: "director for our client team. ",
    email: "aaa@gmail.com",
  },
  {
    id: 5,
    image: aboutus1,
    name: "Pat Heffernan",
    position: "President",
    description: "Pat — marketing strategist, writer, and founder of ",
    description1: "Marketing Partners — serves as creative change ",
    description2: "director for our client team. ",
    email: "aaa@gmail.com",
  },
  {
    id: 6,
    image: aboutus2,
    name: "Pat Heffernan",
    position: "President",
    description: "Pat — marketing strategist, writer, and founder of ",
    description1: "Marketing Partners — serves as creative change ",
    description2: "director for our client team. ",
    email: "aaa@gmail.com",
  },
  {
    id: 7,
    image: aboutus,
    name: "Pat Heffernan",
    position: "President",
    description: "Pat — marketing strategist, writer, and founder of ",
    description1: "Marketing Partners — serves as creative change ",
    description2: "director for our client team. ",
    email: "aaa@gmail.com",
  },
  {
    id: 8,
    image: aboutus1,
    name: "Pat Heffernan",
    position: "President",
    description: "Pat — marketing strategist, writer, and founder of",
    description1: "Marketing Partners — serves as creative change ",
    description2: "director for our client team. ",
    email: "aaa@gmail.com",
  },
  {
    id: 9,
    image: aboutus2,
    name: "Pat Heffernan",
    position: "President",
    description: "Pat — marketing strategist, writer, and founder of ",
    description1: "Marketing Partners — serves as creative change ",
    description2: "director for our client team. ",
    email: "aaa@gmail.com",
  },
];
const GlobalTeam = () => {
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
        Global Team
      </Typography>
      <div>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignitem: "center",
            p: 5,
          }}
        >
          {data.map((members) => (
            <Grid
              key={members.id}
              item
              lg={4}
              md={6}
              sm={6}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
              }}
            >
              <div>
                <Box>
                  <img src={members.image} alt={members.name} />
                </Box>
                <Box>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#474747",
                    }}
                  >
                    {members.name}
                  </p>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#474747",
                    }}
                  >
                    {members.position}
                  </p>
                  <p
                    style={{
                      //   fontWeight: "500",
                      fontSize: "16px",
                      color: "#474747",
                    }}
                  >
                    {members.description}
                    <br />
                    {members.description1}
                    <br />
                    {members.description2}
                    <br />
                  </p>
                  <a href={`mailto:${members.email}`}>
                    <IconButton className="global_IconButton">
                      <Tooltip title={members.email} arrow>
                        <img src={email} alt="email" />{" "}
                      </Tooltip>
                    </IconButton>
                  </a>
                </Box>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default GlobalTeam;
