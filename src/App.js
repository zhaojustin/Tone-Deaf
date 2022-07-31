import Wrapper from "./Components/Home/Wrapper";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Util/Theme";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Wrapper />
      </ThemeProvider>
    </div>
  );
}

export default App;
