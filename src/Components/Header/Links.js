import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { Link as RouterLink } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Links() {
  //drawer variables
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer(open);
  };

  return (
    <div>
      {/* SHOW ONLY ON BIGGER SCREENS */}
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          {/* Home */}
          <Box sx={{ mr: 6 }}>
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              underline="none"
            >
              <Typography variant="subtitle1">Home</Typography>
            </Link>
          </Box>
          {/* Work */}
          <Box sx={{ mr: 6 }}>
            <Link
              component={RouterLink}
              to="/"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              color="inherit"
              underline="none"
              onClick={() => {
                const titleElement = document.getElementById("work");
                titleElement.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Typography variant="subtitle1">Works</Typography>
            </Link>
          </Box>
          {/* About */}
          <Box sx={{ mr: 6 }}>
            <Link
              component={RouterLink}
              to="/About"
              color="inherit"
              underline="none"
            >
              <Typography variant="subtitle1">About</Typography>
            </Link>
          </Box>
          <Box>
            <Box>
              <Button variant="contained" component={RouterLink} to="/Contact">
                Book a Call
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* SHOW ONLY ON MOBILE SCREENS */}
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* SHOW ONLY ON MOBILE SCREENS */}
      <Drawer open={drawer} anchor="right" onClose={toggleDrawer(false)}>
        <Box sx={{ p: 3, pt: 6, height: "100%", backgroundColor: "#121212" }}>
          <List>
            <ListItem sx={{ pt: 2 }}>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="none"
                onClick={() => {
                  setDrawer(false);
                }}
              >
                <Typography variant="subtitle1">Home</Typography>
              </Link>
            </ListItem>
            <ListItem sx={{ pt: 2 }}>
              <Link
                component={RouterLink}
                to="/About"
                color="inherit"
                underline="none"
                onClick={() => {
                  setDrawer(false);
                }}
              >
                <Typography variant="subtitle1">About</Typography>
              </Link>
            </ListItem>
            <ListItem sx={{ pt: 2 }}>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="none"
                onClick={() => {
                  setDrawer(false);
                  const titleElement = document.getElementById("work");
                  titleElement.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Typography variant="subtitle1">Works</Typography>
              </Link>
            </ListItem>
            <ListItem sx={{ pt: 2 }}>
              <Button
                variant="contained"
                component={RouterLink}
                to="/Contact"
                onClick={() => {
                  setDrawer(false);
                }}
              >
                Book a Call
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
