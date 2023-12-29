import styles from './InfoProjeto.module.css';
import BotaoPadrao from '../BotaoPadrao';
import Slides from '../Slides';
import imagem1 from '../../imagensTeste/1.png';
import imagem2 from '../../imagensTeste/2.png';
import imagem3 from '../../imagensTeste/3.png';

export default function InfoProjeto ({ projetoNome='Jogo Da Velha' }) {

    const slidesTeste = [imagem1, imagem2, imagem3]

    return(
        <div className={styles.tabelas}>
            <div className={styles.espacoTextos}>
                <div>
                    <h1 className={styles.titulo}>Olá</h1>
                </div>
                <div>
                    <p>Texto</p>
                </div>
            </div>
            <div className={styles.espacoImagem}>
                <div className={styles.slideQuadrado}>
                    <Slides imagens={slidesTeste}/>
                </div>
                <div className={styles.botao}>
                    <BotaoPadrao texto='Contato'/>
                </div>
            </div>
        </div>
    );
}