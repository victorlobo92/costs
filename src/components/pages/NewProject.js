import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

export default function NewProject() {
    return (
        <div className={styles.new_project_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm />
        </div>
    )
}