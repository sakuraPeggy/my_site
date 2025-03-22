import { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom"; // Import Link for internal navigation

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Navbar */}
      <AppBar

  sx={{
    backgroundColor: "#F5B5AE",
    boxShadow: "none",
    left: 0,
    right: 0,
    width: "100vw", // Full viewport width
  }}
>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            {["Home", "About", "Portfolio", "Contact"].map((text) => (
              <Link to={`/${text.toLowerCase()}`} key={text} style={{ textDecoration: "none" }}>
                <Typography 
                  sx={{
                    fontSize: "12px",
                    color: "grey.600",
                    fontWeight: 50,
                    cursor: "pointer",
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  {text}
                </Typography>
              </Link>
            ))}
          </Box>

          {/* Social Icons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton component={Link} to="/contact">
              <EmailIcon sx={{ color: "#FFF" }} />  
            </IconButton>
            <IconButton component="a" href="https://www.linkedin.com/in/peggy-siamoc-6b4255307" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon sx={{ color: "#FFF" }} /> 
            </IconButton>
            <Tooltip title="09622465564" arrow>
              <IconButton component={Link} to="/contact">
                <PhoneIcon sx={{ color: "#FFF" }} />  
              </IconButton>
            </Tooltip>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton sx={{ color: "#FFF", display: { md: "none" } }} onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <List sx={{ width: 200 }}>
          {["Home", "About", "Portfolio", "Contact"].map((text) => (
            <ListItem 
              button 
              key={text} 
              component={Link} 
              to={`/${text.toLowerCase()}`} 
              onClick={toggleDrawer} 
              sx={{ textAlign: "center", textDecoration: "none", color: "#444" }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
