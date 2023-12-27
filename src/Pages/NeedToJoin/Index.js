import React, { useEffect, useState, useRef } from "react";
import { withbaby } from "../../config/Images/Images";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Grid, Paper, Box, Button, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./style.css";

const NeedJoin = () => {
  const YOUR_SERVICE_ID = "service_4bhx3f3";
  const YOUR_TEMPLATE_ID = "template_qpf9lzn";
  const YOUR_PUBLIC_ID = "EOtEPRGTBteW_eBrM";

  // const YOUR_SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  // const YOUR_TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  // const YOUR_PUBLIC_ID = process.env.REACT_APP_PUBLIC_ID;
  const form = useRef();

  const [name, setName] = React.useState("");
  const [emailAccess, setEmailAccess] = useState("");
  const [gender, setGender] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: emailAccess,
      from_gender: gender,
      contact_number: contactNo,
      address: address,
    };

    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_PUBLIC_ID)
      .then(
        (response) => {
          Swal.fire({
            icon: "success",
            title: "Success",
            toast: true,
            position: "top-end",
            iconColor: "white",
            customClass: {
              popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
              setName("");
              setEmailAccess("");
              setGender("");
              setContactNo("");
              setAddress("");
            },
          });
        },
        (response) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            toast: true,
            position: "top-end",
            iconColor: "white",
            customClass: {
              popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
        }
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <form ref={form} onSubmit={handleSubmit}>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Male"
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
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                  value={emailAccess}
                  onChange={(e) => setEmailAccess(e.target.value)}
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
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                />
              </Grid>
              <Box className="label">
                <Button
                  variant="contained"
                  sx={{ fontSize: "20px", ml: 2, mt: 4 }}
                  type="submit"
                >
                  Send
                </Button>
              </Box>
            </Grid>
          </form>
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
