import { BsPencil, BsFillTrashFill, BsPen } from "react-icons/bs";
import { Link } from "react-router-dom";

import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  id,
  name,
  budget,
  category,
  handleRemove,
}) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R$ {budget}
      </p>
      <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`} /> {category}
      </p>
      <div className={styles.project_card_actions}>
        <Link to="/">
          <BsPencil /> Editar
        </Link>
        <button type="button" onClick={remove}>
          <BsFillTrashFill /> Remover
        </button>
      </div>
    </div>
  );
}