import React from "react";
import { namastheLogo2 } from "../../config/Images/Images";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Sheet from "@mui/joy/Sheet";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Sheet
        sx={{
          flexGrow: 4,
          // p: 2,
          borderRadius: { xs: 0, sm: "sm" },
          bgcolor: "#F8F8F8",
          marginBottom: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row", lg: "row" },
            alignItems: { md: "center" },
            justifyContent: "space-between",
            flexWrap: "wrap",

            marginLeft: { lg: "7rem", md: "2rem", sm: "1rem", xs: 0 },
            marginRight: { lg: "4rem", md: "2rem", sm: "2rem", xs: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: { xs: "30px", sm: "0", md: "0", lg: "0", xl: "0" },
              paddingRight: { xs: "30px", sm: "0", md: "0", lg: "0", xl: "0" },
              marginTop: { xs: "1rem" },
            }}
          >
            <img
              src={namastheLogo2}
              alt="namastheLogo2"
              height="180px"
              width="387px"
            />
          </Box>
          <List
            size="sm"
            orientation="horizontal"
            wrap
            sx={{
              flexGrow: 0,
              "--ListItem-radius": "8px",
              "--ListItem-gap": "0px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ListItem
              nested
              sx={{
                width: { xs: "100%", sm: "33%", md: 140, lg: 170 },
                paddingTop: "20px",
              }}
            >
              <ListItem
                sx={{
                  color: "#000",
                  fontSize: "24px",
                  fontWeight: "500",
                  display: {
                    xs: "flex",
                    sm: "flex",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                  justifyContent: {
                    xs: "center",
                    sm: "flex-start",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "flex-start",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                  ml: {
                    xs: "0rem",
                    sm: "4rem",
                    md: "0",
                    lg: "0",
                    xl: "0",
                  },
                }}
              >
                Links
              </ListItem>
              <List
                sx={{
                  display: {
                    xs: "flex",
                    sm: "flex",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                  justifyContent: {
                    xs: "center",
                    sm: "flex-start",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "flex-start",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                  ml: {
                    xs: "0rem",
                    sm: "4rem",
                    md: "0rem",
                    lg: "0rem",
                    xl: "0rem",
                  },
                }}
              >
                <Link to="/" style={{ textDecoration: "none" }}>
                  <ListItem>
                    <ListItem
                      sx={{
                        color: "#454342",
                        fontSize: "18px",
                        fontWeight: "500",
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Home
                    </ListItem>
                  </ListItem>
                </Link>
                <Link to="/team" style={{ textDecoration: "none" }}>
                  <ListItem>
                    <ListItem
                      sx={{
                        color: "#454342",
                        fontSize: "18px",
                        fontWeight: "500",
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      About Us
                    </ListItem>
                  </ListItem>
                </Link>
                <ListItem>
                  <ListItem
                    sx={{
                      color: "#454342",
                      fontSize: "18px",
                      fontWeight: "500",
                      "&:hover": { cursor: "pointer" },
                    }}
                  >
                    Resources
                  </ListItem>
                </ListItem>
                <Link to="/events" style={{ textDecoration: "none" }}>
                  <ListItem>
                    <ListItem
                      sx={{
                        color: "#454342",
                        fontSize: "18px",
                        fontWeight: "500",
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Events
                    </ListItem>
                  </ListItem>
                </Link>
                <ListItem>
                  <ListItem
                    sx={{
                      color: "#454342",
                      fontSize: "18px",
                      fontWeight: "500",
                      "&:hover": { cursor: "pointer" },
                    }}
                  >
                    Contact
                  </ListItem>
                </ListItem>
              </List>
            </ListItem>
            <ListItem
              nested
              sx={{
                width: { xs: "100%", sm: "33%", md: 140, lg: 170 },
                paddingTop: "20px",
                order: { xs: 3, lg: 2, md: 2, sm: 2 },
              }}
            >
              <ListItem
                sx={{
                  color: "#000",
                  fontSize: "24px",
                  fontWeight: "500",
                  display: { xs: "flex" },
                  justifyContent: {
                    xs: "center",
                    sm: "",
                    md: "",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                  alignItems: {
                    xs: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                    sm: "",
                  },
                }}
              >
                Follow
              </ListItem>
              <List
                sx={{
                  display: { xs: "flex" },
                  // justifyContent: { xs: "center" },
                  alignItems: {
                    xs: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                    sm: "",
                  },
                }}
              >
                <ListItem>
                  <a href="https://www.instagram.com/">
                    <InstagramIcon />
                  </a>
                  &nbsp;
                  <a href="https://www.facebook.com/">
                    <FacebookRoundedIcon />
                  </a>
                  &nbsp;
                  <a href="https://www.linkedin.com/">
                    <LinkedInIcon />
                  </a>
                  &nbsp;
                  <a href="https://www.youtube.com/">
                    <YouTubeIcon />
                  </a>
                  &nbsp;
                </ListItem>
              </List>
            </ListItem>
            <ListItem
              nested
              sx={{
                width: { xs: "100%", sm: "33%", md: 180, lg: 250 },
                paddingTop: "20px",
                order: { xs: 2, lg: 3, md: 3, sm: 3 },
              }}
            >
              <ListItem
                sx={{
                  color: "#000",
                  fontSize: "24px",
                  fontWeight: "500",
                  display: { xs: "flex", sm: "flex" },
                  justifyContent: {
                    xs: "center",
                    sm: "flex-start",
                    md: "",
                    lg: "",
                    xl: "",
                  },
                  alignItems: { xs: "center", sm: "flex-start" },
                }}
              >
                Contact
              </ListItem>
              <List
                sx={{
                  "--ListItemDecorator-size": "32px",
                  mr: { xs: "0", sm: "33%", md: "-5%", lg: "-5%" },
                  margin: { xs: "auto" },
                }}
              >
                <ListItem
                  sx={{
                    textAlign: {
                      xs: "center",
                      sm: "left",
                      md: "",
                      lg: "",
                      xl: "",
                    },
                  }}
                >
                  <p style={{ fontSize: "18px", fontWeight: 500 }}>
                    195M, 'Karlshue Court', <br />
                    Baseline Road, Colombo 09, <br />
                    Sri Lanka.
                    <a href="mailto:info@namasthesl.com">
                      <p>info@namasthesl.com</p>
                    </a>
                  </p>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Box>
      </Sheet>
    </div>
  );
};

export default Footer;
