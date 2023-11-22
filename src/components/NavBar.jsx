"use client"; // client component, not server rendered
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// // copied from previous NavBar.jsx component, modified for Next.js
// // save as src/components/NavBar.jsx
// export default function NavBar() {
//   const path = usePathname(); // hook to check current path
//   return (
//     <nav
//       className="NavBar"
//     >
//       <ul className="menu">
//         {/* Next.js Link components use href instead of to prop */}
//         <li>
//           <Link href="/">Home</Link>
//         </li>
//         <li>
//           <Link
//             href="/about"
//             className={path.startsWith("/about") ? "active" : null}
//           >
//             About
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/contact"
//             className={path.startsWith("/contact") ? "active" : null}
//           >
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }


import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import { NavLink } from "react-router-dom";
import Link from "next/link";

import MenuItem from "@mui/material/MenuItem";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Menu } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/Cloud";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function NavBar() {
  //   const [anchorEl, setAnchorEl] = useState < null | HTMLElement > (null);
  const [anchorEl, setAnchorEl] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
        

          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon 
                  color="inherit"
                  id="resources-button"
                  onClick={handleClick}
                  aria-control={open ? "resources-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  endIcon={<KeyboardArrowDownIcon/>}                
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
                  <MenuItem onClick={handleClose}><Link href="/">Home</Link></MenuItem>
                  <MenuItem onClick={handleClose}> <Link
            href="/about"
            // className={path.startsWith("/about") ? "active" : null}
          >
            About
          </Link></MenuItem>
                </Menu>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Exercise5
              </Typography>
              <Button color="inherit">
              <Link
            href="/contact"
            // className={path.startsWith("/contact") ? "active" : null}
          >
            Contact
          </Link>
              </Button>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Box>
    </>
  );
}

