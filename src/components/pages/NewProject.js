import { useNavigate } from "react-router-dom";

import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

export default function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json)
      .then((data) => {
        console.log(data);
        navigate("/projects", { message: "Projeto criado com sucesso!" });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.new_project_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm btnText="Criar projeto" handleSubmit={createPost} />
    </div>
  );
}
