import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Landing from "./Landing";

export default function About() {
  return (
    <Box>
      {/* WHO WE ARE */}
      <Landing />

      {/* TITLE */}
      <Box sx={{ pt: { xs: 15, sm: 25 }, pb: { xs: 10, sm: 15 } }}>
        <Typography align="center" variant="subtitle1">
          Our Values
        </Typography>
      </Box>

      {/* VALUES */}
      <Box>
        <Grid container spacing={{ xs: 5, sm: 10 }}>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="subtitle1">Quality/Quantity</Typography>
              <Typography variant="subtitle2" color="secondary">
                1x grandpa’s homemade cheeseburger {">"} 100x Big Mac
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="subtitle1">Oceans not Ponds</Typography>
              <Typography variant="subtitle2" color="secondary">
                Approach projects at scale, don’t be afraid to think big and go
                bold.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="subtitle1">Impact</Typography>
              <Typography variant="subtitle2" color="secondary">
                Tailor creative assets to suit unique business challenges.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="subtitle1">Rebellious Nature</Typography>
              <Typography variant="subtitle2" color="secondary">
                Always innovate, tune, strategize. Stay forward thinking to keep
                ahead of the curb.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="subtitle1">Transparency</Typography>
              <Typography variant="subtitle2" color="secondary">
                Honesty and goodwill all the way through.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
