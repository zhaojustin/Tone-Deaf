import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ReactPlayer from "react-player";
import { Link as RouterLink } from "react-router-dom";

import Reel from "./Assets/REEL-COMPRESSED.mp4";

export default function Landing() {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 8 }}
        sx={{ justifyContent: "space-between" }}
      >
        {/* LEFT BOX */}
        <Box sx={{ width: { xs: "100%", sm: "40%" } }}>
          <Typography
            variant="h3"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <strong>Rethink</strong> Creative Advertising
          </Typography>
          {/* MOBILE ONLY */}
          <Typography
            variant="h4"
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <strong>Rethink</strong> Creative Advertising
          </Typography>
          <Typography
            sx={{ mt: 3, display: { xs: "none", sm: "block" } }}
            variant="h5"
          >
            Tech, Fashion, Lifestyle.
          </Typography>
          {/* MOBILE ONLY */}
          <Typography
            variant="h5"
            sx={{ mt: 3, display: { xs: "block", sm: "none" } }}
          >
            Tech, Fashion, Lifestyle.
          </Typography>
          <Typography sx={{ mt: 3 }} variant="subtitle1" color="secondary">
            Whether you’re a team of one, a growing startup, or a Fortune 500
            company—we have flexible solutions to market your brand.
          </Typography>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{ mt: 5 }}
          >
            <Button variant="contained" component={RouterLink} to="/Contact">
              Book a Call
            </Button>
            <Button
              variant="filled"
              onClick={() => {
                const titleElement = document.getElementById("work");
                titleElement.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See Our Work
            </Button>
          </Stack>
        </Box>
        {/* REEL */}
        <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
          <ReactPlayer
            url={Reel}
            width="100%"
            height="375"
            controls={true}
            playing={true}
            loop={true}
            volume={0}
            config={{
              file: {
                attributes: {
                  controlslist: "nodownload noremoteplayback",
                  disablepictureinpicture: "true",
                },
              },
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
}
