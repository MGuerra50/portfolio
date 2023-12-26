import Slides from '../Slides';
import styles from './Certificacoes.module.css';
import imagem1 from '../../imagensTeste/1.png';
import imagem2 from '../../imagensTeste/2.png';
import imagem3 from '../../imagensTeste/3.png';

export default function Certificacoes () {

    const testeSlide = [imagem1, imagem2, imagem3];

    return (
            <div className={styles.espacoCertificacoes}>
                <div className={styles.backgroundDivisao}>
                    <div className={styles.circulo}/>
                    <h1 className={styles.titulo}>Certificacoes</h1>
                    <div className={styles.teste}>
                        <Slides imagens={testeSlide} largura = '914.4975px' altura = '455px'/>
                    </div>
                </div>
                <div className={styles.quadrado}/>
            </div>
    );
}