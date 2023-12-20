import React, { useEffect } from "react";
import "./style.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { proobj } from "../../config/Images/Images";
import { Box } from "@mui/material";
const data = [
  {
    text: "Identifying the non-specialist workforce to support both detection and intervention services in all four contexts.",
  },
  {
    text: "Adapt the SACS screening tool for administration in the four districts and develop a data pathway for detection results to link with the appropriate intervention pathway.",
  },
  {
    text: "Digitise training and supervision of the PASS Plus intervention which can support non-specialist providers to learn the intervention remotely,",
  },
  {
    text: "Develop a context-specific community awareness campaign which would allow broad stakeholder engagement with the pathway to care.",
  },
  {
    text: "Establish the detection-care pathway and evaluate the effectiveness, including cost effectiveness, of these pathways in four differing public systems.",
  },
  {
    text: "Build wider awareness on early childhood care and development for neurodevelopmental disabilities by working with advocates and advisors with experiential understanding of disability.",
  },
  {
    text: "Build clinical, training, and research capacity in the field of neurodevelopmental disabilities in the region.",
  },
];
const ProjectObjectivesCard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Box
        className="project_body"
        sx={{ ml: { xs: 0, lg: "7rem" }, mr: { xs: 0, lg: "7rem" } }}
      >
        {/* <h4 className="project_h4">Project Objectives</h4> */}
        <Typography variant="h4" gutterBottom className="project_h4">
          {" "}
          Project Objectives
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mb: 2,
            fontSize: { lg: "35px", xs: "25px", md: "30px" },
            fontWeight: { xs: "300", lg: "700", md: "500", sm: "400" },
            ml: { xs: 2, lg: 6, md: 3 },
            mr: { xs: 2, lg: 4, md: 3 },
          }}
        >
          Our aim is to address the current gaps where families are struggling
          to access early detection and care services. To achieve these aims we
          will be:
        </Typography>

        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
              }}
            >
              <Card
                sx={{
                  ml: { xs: 2 },
                  mr: { xs: 2 },
                  height: {
                    xl: "300px",
                    lg: "350px",
                    md: "290px",
                    sm: "250px",
                    xs: "290px",
                  },

                  mt: 2,
                  // height: "270px",
                  width: "600px",
                  borderRadius: "15px",
                  backgroundColor:
                    index % 4 === 0 || index % 4 === 1
                      ? "rgba(118, 152, 99, 1)"
                      : "rgb(140, 82, 255)",
                }}
              >
                <Typography
                  sx={{
                    mb: 1.5,
                    p: 3,
                    fontSize: {
                      lg: "27px",
                      md: "24px",
                      sm: "24px",
                      xs: "24px",
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontWeight: 500,
                    padding: "30px 30px 30px 30px",
                  }}
                  color="text.secondary"
                >
                  {item.text}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <div className="projectObj_footer">
        <img src={proobj} alt="proobj" />
      </div>
    </div>
  );
};

export default ProjectObjectivesCard;
