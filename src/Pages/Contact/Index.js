import React from "react";
import { contactus } from "../../config/Images/Images";
import { Grid, Paper, Box, Button, Typography } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
const Contact = () => {
  return (
    <div>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 600,
          textAlign: "center",
          mb: 7,
          mt: 7,
          fontSize: "60px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Contact Us
      </Typography>
      <img src={contactus} alt={contactus} />
      <Box
        sx={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            mb: 2,
          }}
        >
          <LocationOnRoundedIcon
            sx={{ width: "70px", height: "70px", color: "#769863" }}
          />
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: {
                xl: "25px",
                lg: "25px",
                md: "25px",
                sm: "20px",
                xs: "15px",
              },
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            195M, 'Karlshue Court', <br />
            Baseline Road, Colombo 09, Sri Lanka.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            mb: 5,
          }}
        >
          <EmailRoundedIcon
            sx={{ width: "70px", height: "70px", color: "#769863" }}
          />
          <a
            href="mailto:info@namasthesl.com"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: {
                  xl: "25px",
                  lg: "25px",
                  md: "25px",
                  sm: "20px",
                  xs: "15px",
                },
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                fontFamily: "Poppins, sans-serif",
                cursor: "pointer",
              }}
            >
              info@namasthesl.com
            </Typography>
          </a>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
