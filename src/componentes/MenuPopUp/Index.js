import MenuPrincipal from '../MenuPrincipal';
import styles from './MenuPopUp.module.css';

export default function MenuPopUp({ acaoMenu, sair }) {
    return (
        <div className={styles.popUpMenu} style={acaoMenu === false ? { visibility: 'hidden' } : { visibility: 'visible' }}>
                <MenuPrincipal classname={styles.menuPrincipal} background='white' mobile={true} />
            <div className={styles.sairMenu} onClick={sair}></div>
        </div>
    );
}