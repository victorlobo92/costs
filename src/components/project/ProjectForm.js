import * as form from '../form/Form'
import styles from './ProjectForm.module.css'

export default function ProjectForm({ btnText }) {
    return (
        <form className={styles.form}>
            <form.Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <form.Input
                type="number"
                text="Orçamento do projeto"
                name="budgt"
                placeholder="Insira o orçamento total"
            />
            <form.Select
                name="category_id"
                text="Selecione a categoria"
            />
            <form.SubmitButton text={btnText} />
        </form>
    )
}