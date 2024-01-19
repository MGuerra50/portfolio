import styled from 'styled-components';
import MenuPrincipal from '../MenuPrincipal';
import styles from './Cabecalho.module.css';
import logo from './Logo/logo2.png';
import { Link } from 'react-router-dom';

const LogoSite = styled.img`
    width: 100%;
    height: auto;
    opacity: 100%;
`

export default function Cabecalho() {
    return (
        <div className={styles.delimitacaoCabecalho}>

            <div className={styles.cabecalho}>
                <div className={styles.logo}>
                    <Link to={'/'}>
                        <LogoSite src={logo} alt='Imagem de logo do site' />
                    </Link>
                </div>

                <div className={styles.menuPrincipal}>
                    <MenuPrincipal cor='#ffffff' />
                </div>

            </div>

        </div>
    );
}