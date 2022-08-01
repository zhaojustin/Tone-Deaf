import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Socials() {
  return (
    <Box>
      {/* twitter */}
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="right"
      >
        <Grid item>
          <Typography>@tonedeaf</Typography>
        </Grid>
        <Grid item sx={{ ml: 2 }}>
          <TwitterIcon />
        </Grid>
      </Grid>
      {/* instagram */}
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="right"
      >
        <Grid item>
          <Typography>@tonedeaf</Typography>
        </Grid>
        <Grid item sx={{ ml: 2 }}>
          <InstagramIcon />
        </Grid>
      </Grid>
      {/* email */}
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="right"
      >
        <Grid item>
          <Typography>email@tonedeaf.com</Typography>
        </Grid>
        <Grid item sx={{ ml: 2 }}>
          <EmailOutlinedIcon />
        </Grid>
      </Grid>
    </Box>
  );
}
