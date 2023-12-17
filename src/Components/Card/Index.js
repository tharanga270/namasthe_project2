import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { projectcard1, projectcard2 } from "../../config/Images/Images";
import { Grid } from "@mui/material";
import "./style.css";
const ProjectCard = () => {
  return (
    <div style={{}}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              borderRadius: 10,
              background: "#FFF",
              boxShadow: "2px 2px 20px 3px rgba(0, 0, 0, 0.06)",
              textAlign: "center",
              width: "22rem",
              height: "22rem",
              marginTop: {
                lg: "-100px",
                md: "-50px",
                sm: "2px",
                xs: "2px",
              },
              zIndex: 999,

              pt: 2,
              pl: 1,
              pr: 1,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                {/* Small Logo */}
                <img
                  src={projectcard1}
                  alt="Small Logo"
                  // style={{ alignItems: "center" }}
                />
              </Box>

              {/* Heading */}
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  color: "#413F3E",
                  fontSize: "22px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  paddingBottom: "20px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Project Background
              </Typography>

              {/* Paragraph */}
              <Typography
                variant="body1"
                color="textSecondary"
                paragraph
                className=""
                style={{
                  color: "#413F3E",
                  fontSize: "12px",
                  fontWeight: "600",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                A £6.95 million Global Health Research Unit on Neurodevelopment
                and Autism for children in South Asia is to launch with the help
                of University of Manchester expertise.
              </Typography>

              <a href="/learn-more">
                <p className="learn_p">Learn More</p>
              </a>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              borderRadius: 10,
              background: "#FFF",
              boxShadow: "2px 2px 20px 3px rgba(0, 0, 0, 0.06)",
              textAlign: "center",
              width: "22rem",
              height: "22rem",
              marginTop: {
                lg: "-100px",
                md: "-50px",
                sm: "2px",
                xs: "2px",
              },
              zIndex: 999,
              pt: 2,
              pl: 1,
              pr: 1,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                {/* Small Logo */}
                <img
                  src={projectcard2}
                  alt="Small Logo"
                  // style={{ alignItems: "center" }}
                />
              </Box>

              {/* Heading */}
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  color: "#413F3E",
                  fontSize: "22px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  paddingBottom: "20px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Project Objectives
              </Typography>

              {/* Paragraph */}
              <Typography
                variant="body1"
                color="textSecondary"
                paragraph
                style={{
                  color: "#413F3E",
                  fontSize: "12px",
                  fontWeight: "600",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Most children with neurodevelopmental disabilities living in
                South Asia have no access to services. This means that families
                are not given the help they need to fully understand their
                child’s needs and know how best to support them.
              </Typography>

              <a href="/projectobj" className="learn_a">
                <p className="learn_p">Learn More</p>
              </a>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectCard;
