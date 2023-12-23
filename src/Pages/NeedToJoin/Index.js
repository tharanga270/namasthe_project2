import React, { useState } from "react";
import { withbaby } from "../../config/Images/Images";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Grid, Paper, Box, Button, Typography } from "@mui/material";
import "./style.css";
const NeedJoin = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(e.target.value));
  };
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
        Application
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "45rem",
            mr: {
              xs: "1rem",
              sm: "",
              md: "",
              lg: "",
            },
            ml: {
              xs: "1rem",
              sm: "",
              md: "",
              lg: "",
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <label className="label">Name</label>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <label className="label">Gender</label>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              {" "}
              <label className="label">Address</label>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              {" "}
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              {" "}
              <label className="label">Email</label>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              {" "}
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{ width: "100%" }}
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                helperText={emailError ? "Please enter a valid email" : ""}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              {" "}
              <label className="label">Contact Number</label>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              {" "}
              <TextField
                id="outlined-basic"
                label="Contact Number"
                variant="outlined"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Box className="label">
              <Button
                variant="contained"
                sx={{ fontSize: "20px", ml: 2, mt: 4 }}
              >
                Send
              </Button>
            </Box>
          </Grid>
        </Paper>
      </Box>{" "}
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xl: "flex-end",
            lg: "flex-end",
            md: "center",
            sm: "center",
            xs: "center",
          },
          mr: 10,
        }}
      >
        <img src={withbaby} alt={withbaby} style={{ width: "550px" }} />
      </Box>
      <br />
    </div>
  );
};

export default NeedJoin;
