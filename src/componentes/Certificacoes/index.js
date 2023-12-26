import Slides from '../Slides';
import styles from './Certificacoes.module.css';
import imagem1 from '../../imagensTeste/1.png';
import imagem2 from '../../imagensTeste/2.png';
import imagem3 from '../../imagensTeste/3.png';

export default function Certificacoes () {

    const testeSlide = [imagem3, imagem1, imagem2, imagem3, imagem1];

    return (
            <div className={styles.espacoCertificacoes}>
                <div className={styles.backgroundDivisao}>
                    <div className={styles.circulo}/>
                    <h1 className={styles.titulo}>Certificacoes</h1>
                    <div className={styles.posicionandoSlide}>
                        <Slides imagens={testeSlide}/>
                    </div>
                </div>
                <div className={styles.quadrado}/>
            </div>
    );
}