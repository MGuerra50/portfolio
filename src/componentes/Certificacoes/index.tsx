import Slides from '../Slides';
import styles from './Certificacoes.module.css';
import slideCertificacoes from './Certificacoes.json';

export default function Certificacoes () {

    return (
            <div className={styles.espacoCertificacoes}>
                <div className={styles.backgroundDivisao}>
                    <div className={styles.circulo}/>
                    <h1 className={styles.titulo}>Certificações</h1>
                    <div className={styles.posicionandoSlide}>
                        <Slides imagens={slideCertificacoes}/>
                    </div>
                </div>
                <div className={styles.quadrado}/>
            </div>
    );
}