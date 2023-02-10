import { Link } from "react-router-dom";

import logo from "../../img/costs_logo.png";
import Container from "./Container";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/new-project">Novo Projeto</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
