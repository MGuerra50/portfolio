import { Link, useLocation } from 'react-router-dom';
import styles from './BotaoPadrao.module.css';
import { useEffect } from 'react';

interface PropsBotao {
    texto: string
    to: string
}

export default function BotaoPadrao({ texto, to }: PropsBotao) {
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