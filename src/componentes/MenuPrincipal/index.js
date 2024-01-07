import styles from './MenuPrincipal.module.css';

export default function MenuPrincipal ({ cor = '#000000', tamanho = 2 }) {
    let fonte = '';
    if(tamanho <= 1){
        fonte = 'medium';
    } else if(tamanho === 2){
        fonte = 'x-large';
    } else if(tamanho >= 3){
        fonte = 'xx-large';
    }
    return (
        <div className={styles.menuPrincipal}>
            <Link>
                <h1 style={{fontSize: fonte, color: cor}} className={styles.item}>Home</h1>
            </Link> 
            <h1 style={{fontSize: fonte, color: cor}} className={styles.item}>Portfólio</h1>
            <h1 style={{fontSize: fonte, color: cor}} className={styles.item}>Contato</h1>
            <h1 style={{fontSize: fonte, color: cor}} className={styles.item}>Sobre mim</h1>
        </div>
    );
}