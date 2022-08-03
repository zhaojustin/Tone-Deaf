import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { Link as RouterLink } from "react-router-dom";

import Links from "./Links";
import Socials from "./Socials";
import SocialsMobile from "./SocialsMobile";

export default function Footer() {
  return (
    <Box sx={{ mt: { xs: 10, sm: 20 } }}>
      <Grid container>
        {/* LINKS */}
        <Grid item xs={12} sm={4}>
          <Links />
        </Grid>
        {/* LOGO */}
        <Grid
          item
          container
          xs={12}
          sm={4}
          justifyContent="center"
          display="flex"
        >
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              underline="none"
            >
              <Typography variant="logo">heyB.</Typography>
            </Link>
          </Box>
        </Grid>
        {/* SOCIALS */}
        <Grid item xs={12} sm={4}>
          <Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Socials />
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <SocialsMobile />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
