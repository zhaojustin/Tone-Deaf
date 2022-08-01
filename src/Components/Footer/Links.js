import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { Link as RouterLink } from "react-router-dom";

export default function Topbar() {
  return (
    <div>
      {/* SHOW ONLY ON BIGGER SCREENS */}
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ mr: { xs: 0, sm: 6 } }}>
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              underline="none"
            >
              <Typography variant="subtitle1">Home</Typography>
            </Link>
          </Box>
          <Box sx={{ mr: { xs: 0, sm: 6 } }}>
            <Link
              component={RouterLink}
              to="/About"
              color="inherit"
              underline="none"
            >
              <Typography variant="subtitle1">About</Typography>
            </Link>
          </Box>
          <Box sx={{ mr: { xs: 0, sm: 6 } }}>
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
            <Link
              component={RouterLink}
              to="/Contact"
              color="inherit"
              underline="none"
            >
              <Typography variant="subtitle1">Book a Call</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
