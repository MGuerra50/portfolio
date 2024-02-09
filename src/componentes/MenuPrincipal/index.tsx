import Links from '../Links';
import styles from './MenuPrincipal.module.css';

interface PropsMenuPrincipal {
    cor?: string
    podeQuebrar?: boolean
    background?: string
    mobile?: boolean
    extender?: string
}

function MenuPrincipal({ cor = '#000000', podeQuebrar = true, background, mobile, extender }: PropsMenuPrincipal) {

    const estilo = () => {
        if (podeQuebrar === true) {
            return { color: cor, fontSize: 1.1 + 'em', marginBottom: 7 + 'px' }
        }
        return { color: cor };
    }

    return (
        <div
            style={podeQuebrar === false ? { flexDirection: 'row' }
                : background ? { backgroundColor: background } : { display: 'flex' }}
            className={mobile ? styles.menuPrincipalMobile : styles.menuPrincipal}
        >
            <Links to={'/'} extender={extender} mobile={mobile}>
                <h1 style={estilo()} className={mobile? styles.itemMobile : styles.item}>Home</h1>
            </Links>
            <Links to={'/portfolio'} extender={extender} mobile={mobile}>
                <h1 style={estilo()} className={mobile? styles.itemMobile : styles.item}>Portfólio</h1>
            </Links>
            <Links to={'/contato'} extender={extender} mobile={mobile}>
                <h1 style={estilo()} className={mobile? styles.itemMobile : styles.item}>Contato</h1>
            </Links>
            <Links to={'/sobremim'} extender={extender} mobile={mobile}>
                <h1 style={estilo()} className={mobile? styles.itemMobile : styles.item}>Sobre mim</h1>
            </Links>
        </div>
    );
}

export default MenuPrincipal;