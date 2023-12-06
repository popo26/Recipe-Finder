"use client"; // client component, not server rendered
import "../css/custom.css";
import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import { MenuBook, Home } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Menu } from "@mui/material";


const earthTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#fff",
      main: "#e5e5e5",
      dark: "#000",
    },
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: "Cascadia Mono",
  },
});

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="NavBar">
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={earthTheme}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                style={{ color: "#808080" }}
              >
                <MenuIcon
                  color="inherit"
                  id="resources-button"
                  onClick={handleClick}
                  aria-controls={open ? "resources-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  fontSize="large"
                />
                <Menu
                  id="resources-menu"
                  anchorEl={anchorEl}
                  open={open}
                  MenuListProps={{
                    "aria-labelledby": "resources-button",
                  }}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={handleClose} style={{ color: "#808080" }}>
                    <Link href="/">
                      <Home />
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose} style={{ color: "#808080" }}>
                    {" "}
                    <Link href="/about">About</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose} style={{ color: "#808080" }}>
                    {" "}
                    <Link
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </MenuItem>
                </Menu>
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{ color: "#808080" }}
              >
                Recipe Finder
              </Typography>

              <Link href="/ingredient">
                <MenuBook
                  color="inherit"
                  fontSize="large"
                  style={{ color: "#808080" }}
                />
              </Link>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Box>
    </div>
  );
}
