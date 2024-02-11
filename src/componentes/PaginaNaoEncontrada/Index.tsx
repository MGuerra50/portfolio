import styles from './PaginaNaoEncontrada.module.css';
import { TbError404 } from "react-icons/tb";

export default function PaginaNaoEncontrada () {
    return(
        <div className={styles.backgroundPagina}>
            <TbError404 className={styles.erro404}/>
            <h1 className={styles.titulo}>Ops... Esta página não foi encontrada!</h1>
        </div>
    )
}