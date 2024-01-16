import { Link } from 'react-router-dom';
import styles from './BotaoPadrao.module.css';

export default function BotaoPadrao({ texto, to }) {
    return (
        <Link to={to}>
            <button className={styles.botao}>
                {texto}
            </button>
        </Link>
    );
}