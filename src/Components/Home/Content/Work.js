import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  height: "600",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Work() {
  return (
    <Box>
      <Typography variant="h5">Our Past Work:</Typography>
      <Box sx={{ mt: 5 }}>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} sm={6}>
            <Paper sx={{ backgroundColor: "#1A2027", p: 3 }}>
              <Box>
                <Typography variant="h6">Name 1</Typography>
                <Typography variant="body1" sx={{ pt: 3, pb: 3 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Box>
              <iframe
                width="100%"
                height="275"
                src="https://www.youtube-nocookie.com/embed/TJBh_hj6DzE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ backgroundColor: "#1A2027", p: 3 }}>
              <Box>
                <Typography variant="h6">Name 2</Typography>
                <Typography variant="body1" sx={{ pt: 3, pb: 3 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Box>
              <iframe
                width="100%"
                height="275"
                src="https://www.youtube-nocookie.com/embed/4Q8Xl8vKl2I"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ backgroundColor: "#1A2027", p: 3 }}>
              <Box>
                <Typography variant="h6">Name 3</Typography>
                <Typography variant="body1" sx={{ pt: 3, pb: 3 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Box>
              <iframe
                width="100%"
                height="275"
                src="https://www.youtube-nocookie.com/embed/q-74HTjRbuY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ backgroundColor: "#1A2027", p: 3 }}>
              <Box>
                <Typography variant="h6">Name 4</Typography>
                <Typography variant="body1" sx={{ pt: 3, pb: 3 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Box>
              <iframe
                width="100%"
                height="275"
                src="https://www.youtube-nocookie.com/embed/-C-2AqRD8io"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
