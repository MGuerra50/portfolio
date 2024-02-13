import Slides from '../../componentes/Slides';
import styles from './Inicial.module.css';
import slidesDestaques from './destaques.json';
import Resumo from '../../componentes/Resumo';
import BotaoPadrao from '../../componentes/BotaoPadrao';
import Certificacoes from '../../componentes/Certificacoes';
import MoldeContainers from '../../componentes/MoldeContainers/Index';

export default function Inicial() {

    const conhecimentos = ['React', 'NodeJs', 'PostgreSQL', 'MER', 'HTML', 'CSS'];

    return (
        <MoldeContainers>
            <div className={styles.slideShow}>
                <div className={styles.slidePaginaInicial}>
                    <Slides imagens={slidesDestaques}/>
                </div>

                <div className={styles.backgroundSlide}>
                    <span className={styles.movimentoSlide}>
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
                    </span>
                </div>
            </div>
            <Resumo conhecimentos={conhecimentos} />
            <Certificacoes />
        </MoldeContainers>
    );
}