import MenuPrincipal from '../MenuPrincipal';
import styles from './Cabecalho.module.css';
import logo from './Logo/logo2.png';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import MenuPopUp from '../MenuPopUp';
import ReactDOM from 'react-dom';


export default function Cabecalho() {

    const [menuPopUpVisivel, setMenuPopUpVisivel] = useState(false);

    const toqueMenu = () => {
        setMenuPopUpVisivel(!menuPopUpVisivel);
    }

    const menuPopUpContainer = () => {
        return ReactDOM.createPortal(
            <MenuPopUp acaoMenu={menuPopUpVisivel} sair={() => toqueMenu()} />,
            document.body
        );
    };

    return (
        <div className={styles.delimitacaoCabecalho}>

            <div className={styles.cabecalho}>
                <div className={styles.logo}>
                    <Link to={'/'}>
                        <img className={styles.imagemLogo} src={logo} alt='Imagem de logo do site' />
                    </Link>
                </div>

                <div className={styles.menuPrincipal}>
                    <MenuPrincipal cor='#ffffff' podeQuebrar={false} />
                </div>
                <div className={styles.menuPrincipalPopUp}>
                    <IoMenu className={styles.iconeMenuPopUp} onClick={() => toqueMenu()} />
                    {menuPopUpContainer()}
                </div>

            </div>

        </div>
    );
}