import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import * as page from './components/pages/Pages'
import Container from './components/layouts/Container'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/new-project">Novo Projeto</Link>
      </div>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<page.Home />} />
          <Route exact path="/company" element={<page.Company />} />
          <Route exact path="/contact" element={<page.Contact />} />
          <Route exact path="/new-project" element={<page.NewProject />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
