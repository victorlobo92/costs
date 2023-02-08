import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as page from './components/pages/Pages'
import * as layout from './components/layouts/Layouts'

function App() {
  return (
    <Router>
      <layout.Navbar />
      <layout.Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<page.Home />} />
          <Route exact path="/projects" element={<page.Projects />} />
          <Route exact path="/company" element={<page.Company />} />
          <Route exact path="/contact" element={<page.Contact />} />
          <Route exact path="/new-project" element={<page.NewProject />} />
        </Routes>
      </layout.Container>
      <layout.Footer />
    </Router>
  );
}

export default App;
