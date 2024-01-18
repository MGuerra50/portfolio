import { Link, useLocation } from 'react-router-dom';
import styles from './BotaoPadrao.module.css';
import { useEffect } from 'react';

export default function BotaoPadrao({ texto, to }) {
    const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

    return (
        <Link to={to}>
            <button className={styles.botao}>
                {texto}
            </button>
        </Link>
    );
}