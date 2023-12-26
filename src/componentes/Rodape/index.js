import MenuPrincipal from '../MenuPrincipal';
import styles from './Rodape.module.css';

export default function Rodape () {
    return(
        <div className={styles.delimitacaoRodape}>
            
            <div className={styles.rodape}>

                <MenuPrincipal/>
                <h4 className={styles.desenvolvido}>2023 | Desenvolvido por Matheus G. | Direitos reservados</h4>
            
            </div>

        </div>
    );
}