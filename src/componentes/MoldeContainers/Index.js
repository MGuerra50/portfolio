import styles from './MoldeContainers.module.css';

export default function MoldeContainers ({ children }) {
    return(
        <div className={styles.estruturaPagina}>
            {children}
        </div>
    );
}