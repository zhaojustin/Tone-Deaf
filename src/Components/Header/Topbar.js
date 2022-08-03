import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { Link as RouterLink } from "react-router-dom";

import Links from "./Links";

export default function Topbar() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      {/* LOGO */}
      <Box>
        <Link component={RouterLink} to="/" color="inherit" underline="none">
          <Typography variant="logo">heyB.</Typography>
        </Link>
      </Box>

      {/* LINKS */}
      <Links />
    </Box>
  );
}
