import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import Masonry from "@mui/lab/Masonry";

import Typography from "@mui/material/Typography";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";

import { Link as RouterLink } from "react-router-dom";

import "./Player.css";

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
    <Box id="work">
      <Typography variant="h5">Our Past Work:</Typography>
      <Box sx={{ mt: 5, ml: { xs: 1.5, sm: 0 } }}>
        <Masonry columns={{ xs: 1, sm: 2 }} spacing={2}>
          {/* Sundae School */}
          <Paper
            sx={{
              p: 3,
              width: "100%",
              backgroundColor: "#1A2027",
            }}
          >
            <Box className="iframe-container-16_9">
              <iframe
                src="https://player.vimeo.com/video/709360748?h=33cce6fed7"
                className="responsive-iframe"
                allowfullscreen
                frameBorder="0"
              ></iframe>
            </Box>
            <Box sx={{ pt: 2 }}>
              <Typography variant="h6">Sundae School</Typography>
              <Typography variant="subtitle1" color="secondary">
                "Puff"
              </Typography>
            </Box>
          </Paper>
          {/* EXPERIENCE TOGETHER */}
          <Paper
            sx={{
              p: 3,
              width: "100%",
              backgroundColor: "#1A2027",
            }}
          >
            <Box className="iframe-container-145_1">
              <iframe
                src="https://player.vimeo.com/video/713481351?h=67e50c5ae5"
                className="responsive-iframe"
                frameBorder="0"
              ></iframe>
            </Box>
            <Box sx={{ pt: 2 }}>
              <Typography variant="h6">Link</Typography>
              <Typography variant="subtitle1" color="secondary">
                "Experience Together"
              </Typography>
            </Box>
          </Paper>

          {/* CREATIVE IN SEOUL */}
          <Paper
            sx={{
              p: 3,
              width: "100%",
              backgroundColor: "#1A2027",
            }}
          >
            <Box className="iframe-container-16_9">
              <iframe
                src="https://player.vimeo.com/video/587438230?h=0c2a1ed5e3"
                className="responsive-iframe"
                allowfullscreen
                frameBorder="0"
              ></iframe>
            </Box>
            <Box sx={{ pt: 2 }}>
              <Typography variant="h6">
                What It’s Like To Be A Creative In Seoul
              </Typography>
              <Typography variant="subtitle1" color="secondary">
                Documentary
              </Typography>
            </Box>
          </Paper>

          {/* ATOMS */}
          <Paper
            sx={{
              p: 3,
              width: "100%",
              backgroundColor: "#1A2027",
            }}
          >
            <Box className="iframe-container-16_9">
              <iframe
                src="https://player.vimeo.com/video/732745448?h=cd9e1f88c1"
                className="responsive-iframe"
                allowfullscreen
                frameBorder="0"
              ></iframe>
            </Box>
            <Box sx={{ pt: 2 }}>
              <Typography variant="h6">Atoms</Typography>
              <Typography variant="subtitle1" color="secondary">
                "Summer 2022"
              </Typography>
            </Box>
          </Paper>

          {/* UNDER ARMOUR */}
          <Paper
            sx={{
              p: 3,
              width: "100%",
              backgroundColor: "#1A2027",
            }}
          >
            <Box className="iframe-container-267_1">
              <iframe
                src="https://player.vimeo.com/video/479565314?h=70d4b4afdc"
                allowfullscreen
                className="responsive-iframe"
                frameBorder="0"
              ></iframe>
            </Box>
            <Box sx={{ pt: 2 }}>
              <Typography variant="h6">Under Armour</Typography>
              <Typography variant="subtitle1" color="secondary">
                "Dial In"
              </Typography>
            </Box>
          </Paper>

          {/* YOU */}
          <Paper sx={{ backgroundColor: "#1A2027", width: "100%" }}>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: "250px" }}
            >
              <Grid item xs={3} alignItems="center">
                <Stack direction="column" alignItems="center" gap={3}>
                  <AddAPhotoOutlinedIcon fontSize="large" />
                  <Typography variant="subtitle1" color="secondary">
                    Your next work here...
                  </Typography>
                  <Button
                    variant="contained"
                    to="/Contact"
                    component={RouterLink}
                  >
                    Book a Call
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Masonry>
      </Box>
    </Box>
  );
}
