import Links from '../Links';
import styles from './MenuPrincipal.module.css';

function MenuPrincipal({ cor = '#000000', podeQuebrar = true, background }) {

    const estilo = () => {
        if(podeQuebrar===true){
            return { color: cor, fontSize: 1.1+'em', marginBottom: 7+'px' }
        }
        return {color: cor};
    }

    return (
        <div 
            style={podeQuebrar===false ? {flexDirection: 'row'}
                : background ? {backgroundColor: background} : {display: 'flex'}} 
                className={styles.menuPrincipal}
            >
            <Links to={'/'}>
                <h1 style={estilo()} className={styles.item}>Home</h1>
            </Links>
            <Links to={'/portfolio'}>
                <h1 style={estilo()} className={styles.item}>Portfólio</h1>
            </Links>
            <Links to={'/contato'}>
                <h1 style={estilo()} className={styles.item}>Contato</h1>
            </Links>
            <Links to={'/sobremim'}>
                <h1 style={estilo()} className={styles.item}>Sobre mim</h1>
            </Links>
        </div>
    );
}

export default MenuPrincipal;