import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function SocialsMobile() {
  return (
    <Box>
      <hr></hr>
      {/* twitter */}
      <Grid container direction="row" alignItems="center" justifyContent="left">
        <Grid item sx={{ mr: 2 }}>
          <TwitterIcon />
        </Grid>
        <Grid item>
          <Typography>@tonedeaf</Typography>
        </Grid>
      </Grid>
      {/* instagram */}
      <Grid container direction="row" alignItems="center" justifyContent="left">
        <Grid item sx={{ mr: 2 }}>
          <InstagramIcon />
        </Grid>
        <Grid item>
          <Typography>@tonedeaf</Typography>
        </Grid>
      </Grid>
      {/* email */}
      <Grid container direction="row" alignItems="center" justifyContent="left">
        <Grid item sx={{ mr: 2 }}>
          <EmailOutlinedIcon />
        </Grid>
        <Grid item>
          <Typography>email@tonedeaf.com</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
