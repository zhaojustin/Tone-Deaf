import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Landing() {
  return (
    <Box
      sx={{
        pt: { xs: 25, sm: 35 },
        pl: { xs: 0, sm: 15, md: 30 },
        pr: { xs: 0, sm: 15, md: 30 },
      }}
    >
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="subtitle1" align="center">
            heyB is a creative ad agency dedicated to meaningful storytelling.
            We bring together diverse artists, producers, and analysts to
            support clients in their digital marketing needs.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
