import { Link, useLocation } from 'react-router-dom';
import styles from './Links.module.css';
import { ReactNode } from 'react';

interface PropsLinks {
    children: ReactNode
    to: string
    extender?: string
    mobile?: boolean
}

export default function Links({ children, to, extender, mobile }: PropsLinks) {
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