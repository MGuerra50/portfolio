import { Link, useLocation } from 'react-router-dom';
import styles from './Links.module.css';

export default function Links({ children, to }) {
    const localizacao = useLocation();
    return (
        <Link className = {`
            ${styles.link} 
            ${localizacao.pathname === to ? styles.realceLink : ""}
            `} to={to}>

            {children}

        </Link>
    );
}