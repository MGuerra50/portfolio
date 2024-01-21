import Slides from '../../componentes/Slides';
import styles from './Inicial.module.css';
import imagem1 from '../../imagensTeste/1.png';
import imagem2 from '../../imagensTeste/2.png';
import imagem3 from '../../imagensTeste/3.png';
import Resumo from '../../componentes/Resumo';
import BotaoPadrao from '../../componentes/BotaoPadrao';
import Certificacoes from '../../componentes/Certificacoes';
import MoldeContainers from '../../componentes/MoldeContainers/Index';

export default function Inicial() {

    const testeSlide = [imagem1, imagem2, imagem3];
    const conhecimentos = ['React', 'NodeJs', 'PostgreSQL', 'MER', 'HTML', 'CSS'];

    return (
        <MoldeContainers>
            <div className={styles.slideShow}>

                <Slides imagens={testeSlide} />

                <div className={styles.backgroundSlide}>
                    <span className={styles.movimentoSlide}>

                        <div className={styles.botaoParteExterna}>
                        </div>

                        <span className={styles.espacoSlide}>
                            <div className={styles.item3DoGrid}></div>
                            <div></div>
                            <div className={styles.item3DoGrid}>
                                <h1 className={styles.textoSlide}>
                                    Olá, me chamo  Matheus
                                </h1>
                                <h3 className={styles.textoSlide}>
                                    Programador full-stack, e graduando em Engenharia de Computação
                                </h3>
                            </div>
                            <div></div>
                            <div className={styles.item3DoGrid}></div>
                            <div className={styles.item6DoGrid}>
                                <BotaoPadrao texto='Portfólio' to={'/portfolio'} />
                                <BotaoPadrao texto='Contato' to={'/contato'} />
                            </div>
                        </span>

                        <div className={styles.botaoParteExterna}>
                        </div>
                    </span>
                </div>
            </div>
            <Resumo conhecimentos={conhecimentos} />
            <Certificacoes />
        </MoldeContainers>
    );
}