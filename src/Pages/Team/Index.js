import React, { useEffect, useState } from 'react';
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Team1, Team2, gif } from "../../config/Images/Images";
import { Link } from "react-router-dom";
import Preloader from './../../Components/Preloader/index';
const Team = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process (replace with your actual loading logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {isLoading ? <Preloader /> : <></>}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "600",
          fontSize: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Poppins, sans-serif",
          mt: 4,
        }}
      >
        Our Team
      </Typography>
      <div style={{ marginLeft: "5rem", marginRight: "5rem" }}>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
            }}
          >
            <Link to="/global" style={{ textDecoration: "none" }}>
              <Card
                sx={{
                  // maxWidth: 345,
                  mt: 6,
                  borderRadius: 10,
                  height: "15rem",
                  width: "15rem",

                  border: "2px solid green",
                  transition: "border-color 0.3s ease",
                  "&:hover": {
                    borderColor: "purple",
                    cursor: "pointer",
                  },
                }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                  <Grid
                    item
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center",
                    }}
                  >
                    <img src={Team1} alt="" width="65%" height="65%" />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      align="center"
                      mt={1}
                      sx={{
                        fontWeight: "900",
                        color: "purple",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Global Team
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Link>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
            }}
          >
            <Link to="/slteam" style={{ textDecoration: "none" }}>
              <Card
                sx={{
                  // maxWidth: 345,
                  mt: 6,
                  borderRadius: 10,
                  height: "15rem",
                  width: "15rem",

                  border: "2px solid green",
                  transition: "border-color 0.3s ease",
                  "&:hover": {
                    borderColor: "purple",
                    cursor: "pointer",
                  },
                }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                  <Grid
                    item
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center",
                    }}
                  >
                    <img src={Team2} alt="" width="65%" height="65%" />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      align="center"
                      mt={1}
                      color="purple"
                      sx={{
                        fontWeight: "900",

                        color: "purple",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Sri Lankan Team
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "2rem",
          marginTop: "6px",
        }}
      >
        <img src={gif} alt="gif" />
      </div>
    </div>
  );
};

export default Team;
