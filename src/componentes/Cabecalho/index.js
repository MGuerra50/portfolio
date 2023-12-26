import MenuPrincipal from '../MenuPrincipal';
import styles from './Cabecalho.module.css';

export default function Cabecalho () {
    return (
        <div className={styles.delimitacaoCabecalho}>
            
            <div className={styles.cabecalho}>

                <div className={styles.logo}></div>
                
                <div className={styles.menuPrincipal}>
                    <MenuPrincipal cor='#ffffff'/>
                </div>

            </div>

        </div>
    );
}