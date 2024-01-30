import { Link, useLocation } from 'react-router-dom';
import styles from './Links.module.css';

export default function Links({ children, to, extender }) {
    const localizacao = useLocation();
    return (
        <Link className = {`
            ${styles.link} 
            ${localizacao.pathname === to ? styles.realceLink : ""}
            `} to={to} style={extender?{width:extender}:{width:'auto'}}>

            {children}

        </Link>
    );
}