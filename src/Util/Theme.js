import { createTheme } from "@mui/material/styles";
import "../App.css";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7232f2",
    },
    secondary: {
      main: "#cfcfcf",
    },
    background: {
      main: "",
    },
  },
  typography: {
    fontFamily: ['"Overpass Mono"', "GillSans", "Roboto"].join(","),
    logo: {
      fontFamily: "GillSans",
      fontSize: 25,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        underline: "none",
      },
    },
  },
  overrides: {},
});
