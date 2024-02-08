import React, { useEffect, useState, useRef } from "react";
import { withbaby } from "../../config/Images/Images";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  Grid,
  Paper,
  Box,
  Button,
  Typography,
  FormHelperText,
} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import "./style.css";

const NeedJoin = () => {
  const form = useRef();

  const [name, setName] = React.useState("");
  const [emailAccess, setEmailAccess] = useState("");
  const [gender, setGender] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [contactNoError, setContactNoError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setNameError(true);
      return;
    }
    if (!gender) {
      setGenderError(true);
      return;
    }
    if (!address.trim()) {
      setAddressError(true);
      return;
    }
    if (!emailAccess.trim()) {
      setEmailError(true);
      return;
    }
    if (!contactNo.trim()) {
      setContactNoError(true);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAccess)) {
      setEmailError(true);
      return;
    }

    const contactRegex = /^\d{10}$/;
    if (!contactRegex.test(contactNo)) {
      setContactNoError(true);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/sendEmail", {
        name: name,
        email: emailAccess,
        gender: gender,
        contactno: contactNo,
        address: address,
      });

      if (response.status === 200) {
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
      } else {
        console.error("Non-200 status:", response.status);

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
    } catch (error) {
      console.error("Error:", error);

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
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Typography
        gutterBottom
        sx={{
          fontWeight: 600,
          textAlign: "center",
          fontSize: "31px",
          fontFamily: "Poppins, sans-serif",
          color: "red",
          mb: 7,
          mt: 7,
        }}
      >
        If you are a parent of a child with autism or an adult with autism
        interested in joining our community,
        <div> apply here </div>
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
          <form ref={form}>
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
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameError(false);
                  }}
                  error={nameError}
                  helperText={nameError ? "Name is required" : ""}
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
                  onChange={(e) => {
                    setGender(e.target.value);
                    setGenderError(false);
                  }}
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
                {genderError && (
                  <FormHelperText error>Gender is required</FormHelperText>
                )}
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
                  onChange={(e) => {
                    setAddress(e.target.value);
                    setAddressError(false);
                  }}
                  error={addressError}
                  helperText={addressError ? "Address is required" : ""}
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
                  onChange={(e) => {
                    setEmailAccess(e.target.value);
                    setEmailError(false);
                  }}
                  error={emailError}
                  helperText={
                    emailError ? "Valid email address is required" : ""
                  }
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
                  onChange={(e) => {
                    const input = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                    setContactNo(input);
                    setContactNoError(false);
                  }}
                  error={contactNoError}
                  helperText={
                    contactNoError ? "Contact number should be 10 digits" : ""
                  }
                />
              </Grid>
              <Box className="label">
                <Button
                  variant="contained"
                  color="success"
                  sx={{ fontSize: "20px", ml: 2, mt: 4, borderRadius: "10px" }}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Send
                </Button>
              </Box>
            </Grid>
          </form>
        </Paper>
      </Box>

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
    </>
  );
};

export default NeedJoin;
