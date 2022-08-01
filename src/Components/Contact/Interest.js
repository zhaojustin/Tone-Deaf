import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";

export default function Interest(props) {
  return (
    <Box sx={{ mt: 3 }}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 6 }}>
        {/* LEFT */}
        <Box>
          <Typography variant="subtitle1">I'm interested in:</Typography>
          <Typography variant="subtitle2" color="secondary">
            (Select all that apply)
          </Typography>
        </Box>
        {/* RIGHT */}
        <Box sx={{ display: "flex", mt: 1 }}>
          <ToggleButton
            sx={{ mr: 1 }}
            value="check"
            selected={props.call}
            onChange={() => {
              props.setCall(!props.call);
            }}
          >
            A Call
          </ToggleButton>
          <ToggleButton
            sx={{ mr: 1 }}
            value="check"
            selected={props.collab}
            onChange={() => {
              props.setCollab(!props.collab);
            }}
          >
            Collaboration
          </ToggleButton>
          <ToggleButton
            sx={{ mr: 1 }}
            value="check"
            selected={props.other}
            onChange={() => {
              props.setOther(!props.other);
            }}
          >
            Other
          </ToggleButton>
        </Box>
      </Stack>
    </Box>
  );
}
