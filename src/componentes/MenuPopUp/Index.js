import MenuPrincipal from '../MenuPrincipal';
import styles from './MenuPopUp.module.css';

export default function MenuPopUp ({ acaoMenu }) {
    console.log("No componente!")
    return(
        <div className={styles.popUpMenu} style={acaoMenu === false ? {visibility: 'hidden'} : {visibility: 'visible'}}>
            <MenuPrincipal classname={styles.menuPrincipal} background='white'/>
            <div className={styles.sairMenu}></div>
        </div>
    );
}