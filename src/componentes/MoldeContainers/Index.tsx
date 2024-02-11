import { ReactNode } from 'react';
import styles from './MoldeContainers.module.css';

interface PropsMoldeContainers{
    children: ReactNode
}

export default function MoldeContainers ({ children }: PropsMoldeContainers) {
    return(
        <div className={styles.estruturaPagina}>
            {children}
        </div>
    );
}