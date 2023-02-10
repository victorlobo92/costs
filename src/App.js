import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Container, Footer } from "./components/layouts/Layouts";
import * as page from "./components/pages/Pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<page.Home />} />
          <Route exact path="/projects" element={<page.Projects />} />
          <Route exact path="/company" element={<page.Company />} />
          <Route exact path="/contact" element={<page.Contact />} />
          <Route exact path="/new-project" element={<page.NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
