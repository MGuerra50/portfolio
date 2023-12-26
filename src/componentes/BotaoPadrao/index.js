import styles from './BotaoPadrao.module.css';

export default function BotaoPadrao ({ texto }) {
    return(
        <button className={styles.botao}>
            {texto}
        </button>
    );
}