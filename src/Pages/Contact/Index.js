import React from "react";
import { contactus } from "../../config/Images/Images";
import { Grid, Paper, Box, Button, Typography } from "@mui/material";
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
    </div>
  );
};

export default Contact;
