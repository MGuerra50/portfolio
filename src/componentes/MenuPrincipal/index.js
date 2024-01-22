import Links from '../Links';
import styles from './MenuPrincipal.module.css';

export default function MenuPrincipal ({ cor = '#000000' }) {

    return (
        <div className={styles.menuPrincipal}>
            <Links to={'/'}>
                <h1 style={{color: cor}} className={styles.item}>Home</h1>
            </Links>
            <Links to={'/portfolio'}>
                <h1 style={{color: cor}} className={styles.item}>Portfólio</h1>
            </Links>
            <Links to={'/contato'}>
                <h1 style={{color: cor}} className={styles.item}>Contato</h1>
            </Links>
            <Links to={'/sobremim'}>
                <h1 style={{color: cor}} className={styles.item}>Sobre mim</h1>
            </Links>
        </div>
    );
}