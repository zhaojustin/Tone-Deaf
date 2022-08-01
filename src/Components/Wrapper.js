import { Routes, Route } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Topbar from "./Header/Topbar";
import Home from "./Home/Home.js";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export default function Wrapper() {
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <Box>
          <Topbar />
        </Box>
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Container>
    </div>
  );
}
