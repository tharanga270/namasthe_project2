import React from "react";
import { contactus } from "../../config/Images/Images";
import { Box, Typography } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
const Contact = () => {
  return (
    <>
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
            sx={{ width: "22px", height: "22px", color: "#769863" }}
          />
          &nbsp;
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "18px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
            }}
          >
            <Box sx={{ display: "flex", textAlign: "left" }}>
              195M, 'Karlshue Court', <br />
              Baseline Road, Colombo 09, Sri Lanka.
            </Box>
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
            sx={{ width: "22px", height: "22px", color: "#769863" }}
          />
          <a
            href="mailto:info@namasthesl.com"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "18px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                fontFamily: "Poppins, sans-serif",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              &nbsp; info@namastesl.com
            </Typography>
          </a>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
