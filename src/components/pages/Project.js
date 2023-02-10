import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./Project.module.css";

export default function Project() {
  const { id } = useParams();
  console.log(id);

  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProject(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h4>Editar projeto</h4>
      <p>Projeto: {project.name}</p>
    </div>
  );
}