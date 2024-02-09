import MenuPrincipal from '../MenuPrincipal';
import styles from './MenuPopUp.module.css';

interface PropsMenuPopUp{
    acaoMenu: boolean
    sair: ()=>void
}

function MenuPopUp({ acaoMenu, sair }: PropsMenuPopUp) {
    return (
        <div className={styles.popUpMenu} style={acaoMenu === false ? { visibility: 'hidden' } : { visibility: 'visible' }}>
            <div onClick={sair}>
                <MenuPrincipal background='white' mobile={true} extender='100vw' />
            </div>
            <div className={styles.sairMenu} onClick={sair}></div>
        </div>
    );
}

export default MenuPopUp;