import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
          <Typography variant="h3">
            <strong>Dummy</strong> Text Header
          </Typography>
          <Typography sx={{ mt: 3 }} variant="h5">
            Some subtitle here
          </Typography>
          <Typography sx={{ mt: 3 }} variant="subtitle1" color="secondary">
            More subtitle text can be placed here
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            Even more subtitle text can be placed here
          </Typography>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{ mt: 5 }}
          >
            <Button variant="contained">Book a Call</Button>
            <Button variant="filled">See Our Work</Button>
          </Stack>
        </Box>
        {/* REEL */}
        <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
          <iframe
            width="100%"
            height="375"
            src="https://www.youtube-nocookie.com/embed/izHyKdrSKvo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Box>
      </Stack>
    </Box>
  );
}
