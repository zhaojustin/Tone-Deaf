import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Landing from "./Content/Landing";
import Work from "./Content/Work";

export default function Home() {
  return (
    <Box>
      <Box sx={{ mt: { xs: 5, sm: 25 } }}>
        <Landing />
      </Box>
      <Box sx={{ mt: { xs: 5, sm: 30 } }}>
        <Work />
      </Box>
    </Box>
  );
}
