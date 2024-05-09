import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import { namastheLogo } from "../../config/Images/Images";
import { Link } from "react-router-dom";
import { Box, CardMedia } from "@mui/material";
const navListMenuItems = [
  {
    title: "Our Team",
    icon: UserGroupIcon,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <Link to="/team" style={{ textDecoration: "none" }}>
          <MenuItem className="flex items-center rounded-lg py-1 px-1 hover:bg-transparent">
            <div className="flex items-center justify-center">
              {React.createElement(icon, {
                strokeWidth: 2,
                className: "h-6 text-gray-900 w-6  text-green",
              })}
            </div>
            <div>
              <Typography
                variant="h6"
                className="text-sm text-green"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                &nbsp; {title}
              </Typography>
            </div>
          </MenuItem>
        </Link>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="h5" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 hover:bg-transparent"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              style={{
                fontWeight: 600,
                color: "#769863",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              About us
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="outline-none outline-0">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <Box sx={{ mr: { xl: "17%", lg: "7%" } }}>
      <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 lg:justify-end">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            as="a"
            href="#"
            variant="h5"
            className="font-medium text-green"
            style={{
              fontWeight: 600,
              marginRight: "1rem",
            }}
          >
            <ListItem
              className="flex items-center py-2 pr-4 hover:bg-transparent hover:text-green"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Home
            </ListItem>
          </Typography>
        </Link>
        <NavListMenu />
        <Link to="/resources" style={{ textDecoration: "none" }}>
          <Typography
            as="a"
            href="#"
            variant="h5"
            className="font-medium text-green"
            style={{ fontWeight: 600, marginLeft: "1rem" }}
          >
            <ListItem
              className="flex items-center gap-5 py-2 pr-4 hover:bg-transparent hover:text-green"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Resources
            </ListItem>
          </Typography>
        </Link>
        <Link to="/main-events" style={{ textDecoration: "none" }}>
          <Typography
            as="a"
            href="#"
            variant="h5"
            className="font-medium  text-green"
            style={{ fontWeight: 600, marginLeft: "1rem" }}
          >
            <ListItem
              className="flex items-center gap-5 py-2 pr-4 hover:bg-transparent hover:text-green"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Events
            </ListItem>
          </Typography>
        </Link>
        <Link to="/contacts" style={{ textDecoration: "none" }}>
          <Typography
            as="a"
            href="#"
            variant="h5"
            className="font-medium  text-green"
            style={{ fontWeight: 600, marginLeft: "1rem" }}
          >
            <ListItem
              className="flex items-center gap-5 py-2 pr-4 hover:bg-transparent hover:text-green"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contacts
            </ListItem>
          </Typography>
        </Link>
      </List>
    </Box>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1140 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="static top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <Box
            sx={{
              marginLeft: {
                xl: "3rem",
                lg: "3rem",
                md: "0rem",
                sm: "2rem",
                xs: "1rem",
              },
            }}
          >
            <CardMedia
              component="img"
              image={namastheLogo}
              alt={namastheLogo}
            />{" "}
          </Box>
        </Typography>
        <div className="hidden lg:block flex-grow justify-center">
          <NavList />
        </div>
        <div className="flex items-center">
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
