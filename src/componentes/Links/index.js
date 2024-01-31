import { Link, useLocation } from 'react-router-dom';
import styles from './Links.module.css';

export default function Links({ children, to, extender, mobile }) {
    const localizacao = useLocation();
    return (
        <Link className = {`
            ${mobile ? styles.linkMobile : styles.link} 
            ${localizacao.pathname === to ? mobile ? styles.realceLinkMobile : styles.realceLink : ""}
            `} to={to} style={extender && mobile ?{width:extender}:{width:'auto'}}>

            {children}

        </Link>
    );
}