import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Masonry from "@mui/lab/Masonry";

import "./Player.css";

export default function Work() {
  return (
    <Box id="work">
      <Typography variant="h5" sx={{ ml: { xs: 0, sm: 2 } }}>
        Work:
      </Typography>
      <Box sx={{ mt: 5, ml: { xs: 1.5, sm: 0 } }}>
        <Masonry columns={{ xs: 1, sm: 2 }}>
          {/* Sundae School */}
          <Box
            sx={{
              p: 3,
              width: "100%",
            }}
          >
            <Box className="iframe-container-16_9">
              <iframe
                src="https://player.vimeo.com/video/709360748?h=33cce6fed7&title=0&portrait=0&byline=0"
                className="responsive-iframe"
                allowfullscreen
                frameBorder="0"
              ></iframe>
            </Box>
            <Box sx={{ pt: 2 }}>
              <Typography variant="subtitle1">SUNDAE SCHOOL</Typography>
              <Typography variant="subtitle2" color="secondary">
                Puff
              </Typography>
            </Box>
          </Box>
          {/* EXPERIENCE TOGETHER */}
          <Box
            sx={{
              p: 3,
              width: "100%",
            }}
          >
            <Box className="iframe-container-145_1">
              <iframe
                src="https://player.vimeo.com/video/713481351?h=67e50c5ae5&title=0&portrait=0&byline=0"
                className="responsive-iframe"
                allowfullscreen
                frameBorder="0"
              ></iframe>
            </Box>
            <Box sx={{ pt: 2 }}>
              <Typography variant="subtitle1">LINK</Typography>
              <Typography variant="subtitle2" color="secondary">
                Experience Together
              </Typography>
            </Box>
          </Box>

          {/* CREATIVE IN SEOUL */}
          <Box
            sx={{
              p: 3,
              width: "100%",
            }}
          >
            <Box className="iframe-container-16_9">
              <iframe
                src="https://player.vimeo.com/video/587438230?h=0c2a1ed5e3&title=0&portrait=0&byline=0"
                className="responsive-iframe"
                allowfullscreen
                frameBorder="0"
              ></iframe>
            </Box>
            <Box sx={{ pt: 2 }}>
              <Typography variant="subtitle1">
                WHAT IT'S LIKE TO BE A CREATIVE IN SEOUL
              </Typography>
              <Typography variant="subtitle2" color="secondary">
                Documentary
              </Typography>
            </Box>
          </Box>

          {/* ATOMS */}
          <Box
            sx={{
              p: 3,
              width: "100%",
            }}
          >
            <Box className="iframe-container-16_9">
              <iframe
                src="https://player.vimeo.com/video/732745448?h=cd9e1f88c1&title=0&portrait=0&byline=0"
                allowfullscreen
                className="responsive-iframe"
                frameBorder="0"
              ></iframe>
            </Box>
            <Box sx={{ pt: 2 }}>
              <Typography variant="subtitle1">ATOMS</Typography>
              <Typography variant="subtitle2" color="secondary">
                Summer 2022
              </Typography>
            </Box>
          </Box>

          {/* UNDER ARMOUR */}
          <Box
            sx={{
              p: 3,
              width: "100%",
            }}
          >
            <Box className="iframe-container-267_1">
              <iframe
                src="https://player.vimeo.com/video/479565314?h=70d4b4afdc&title=0&portrait=0&byline=0"
                allowfullscreen
                className="responsive-iframe"
                frameBorder="0"
              ></iframe>
            </Box>
            <Box sx={{ pt: 2 }}>
              <Typography variant="subtitle1">UNDER ARMOUR</Typography>
              <Typography variant="subtitle2" color="secondary">
                Dial In
              </Typography>
            </Box>
          </Box>
        </Masonry>
      </Box>
    </Box>
  );
}
