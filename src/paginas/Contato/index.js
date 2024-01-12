import styles from './Contato.module.css';
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GrContact } from "react-icons/gr";

export default function Contato() {
    return (
        <div className={styles.paginaContato}>
            <h1 className={styles.tituloPagina}>Contato</h1>
            <div className={styles.contatos}>
                <div className={styles.campoContato}>
                    <IoPeopleSharp />
                    <h1>Solial</h1>
                </div>
                <div className={styles.campoContato}>
                    <MdOutlineMarkEmailRead />
                    <h1>Email</h1>
                </div>
                <div className={styles.campoContato}>
                    <GrContact />
                    <h1>Contato</h1>
                </div>
            </div>
        </div>
    );
}