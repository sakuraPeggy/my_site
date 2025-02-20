import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@mui/material"; 
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <HashRouter>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
    </HashRouter>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
