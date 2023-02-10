import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Container, Footer } from "./components/layouts/Layouts";
import * as page from "./components/pages/Pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<page.Home />} />
          <Route path="/projects" element={<page.Projects />} />
          <Route path="/new-project" element={<page.NewProject />} />
          <Route path="/project/:id" element={<page.Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
