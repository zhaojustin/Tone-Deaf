import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { Link as RouterLink } from "react-router-dom";

import Links from "./Links";

export default function Footer() {
  return (
    <Box sx={{ mt: 20 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* LINKS */}
        <Links />
        {/* LOGO */}
        <Box>
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            <Typography variant="logo">Tonedeaf</Typography>
          </Link>
        </Box>
        {/* SOCIALS */}
        <Box>
          <Typography>@tonedeaf</Typography>
          <Typography>@tonedeaf</Typography>
          <Typography>@tonedeaf</Typography>
        </Box>
      </Box>
    </Box>
  );
}
