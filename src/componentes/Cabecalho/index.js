import styled from 'styled-components';
import MenuPrincipal from '../MenuPrincipal';
import styles from './Cabecalho.module.css';
import logo from './Logo/logo2.png';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useState } from 'react';
import MenuPopUp from '../MenuPopUp/Index';
import ReactDOM from 'react-dom';

const LogoSite = styled.img`
    width: 100%;
    height: auto;
    opacity: 100%;
`

export default function Cabecalho() {

    const [menuPopUpVisivel, setMenuPopUpVisivel] = useState(false);

    const toqueMenu = () => {
        setMenuPopUpVisivel(!menuPopUpVisivel);
    }

    const menuPopUpContainer = () => {
        return ReactDOM.createPortal(
            <MenuPopUp className={styles.menuPopUp} acaoMenu={menuPopUpVisivel} sair={()=>toqueMenu()}/>,
            document.body
        );
    };

    return (
        <div className={styles.delimitacaoCabecalho}>

            <div className={styles.cabecalho}>
                <div className={styles.logo}>
                    <Link to={'/'}>
                        <LogoSite src={logo} alt='Imagem de logo do site' />
                    </Link>
                </div>

                <div className={styles.menuPrincipal}>
                    <MenuPrincipal cor='#ffffff' podeQuebrar={false} />
                </div>
                <div className={styles.menuPrincipalPopUp}>
                    {menuPopUpVisivel === false
                        ? <IoMenu className={styles.iconeMenuPopUp} onClick={() => toqueMenu()} />
                        : <MdClose className={styles.iconeMenuPopUp} onClick={() => toqueMenu()} />
                    }
                    {menuPopUpContainer()}
                    {/* <MenuPopUp className={styles.menuPopUp} acaoMenu={menuPopUpVisivel} /> */}
                </div>

            </div>

        </div>
    );
}