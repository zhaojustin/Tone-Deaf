import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { Link as RouterLink } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Topbar() {
  return (
    <div>
      {/* SHOW ONLY ON BIGGER SCREENS */}
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
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
          <Box sx={{ mr: 6 }}>
            <Link
              component={RouterLink}
              to="/Work"
              color="inherit"
              underline="none"
            >
              <Typography variant="subtitle1">Work</Typography>
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
        <IconButton aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Box>
    </div>
  );
}
