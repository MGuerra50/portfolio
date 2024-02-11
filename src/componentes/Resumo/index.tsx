import { Link } from 'react-router-dom';
import styles from './Resumo.module.css';
import imagem from './fotoResumo.jpeg';
import BotaoPadrao from '../BotaoPadrao';

interface PropsResumo {
    conhecimentos: string[]
}

export default function Resumo({ conhecimentos }: PropsResumo) {
    return (
        <div className={styles.espacoResumo}>
            <div className={styles.background}>
                <h1 style={{ margin: 0 }} className={styles.titulo}>Resumo sobre mim</h1>
                <div className={styles.conteudoPagina}>
                    <div className={styles.backgroundAzul}>
                        <div className={styles.backgroundPreto}>
                            <img className={styles.imagemResumo} src={imagem} alt='Homem de oculos e camisa azul' />
                        </div>
                    </div>

                    <div className={styles.textoResumo}>
                        <p className={styles.textoPadrao} style={{ fontWeight: 500 }}>Estagiário em desenvolvimento full-stack</p>
                        <p className={styles.textoPadrao} style={{ fontWeight: 500 }}>
                            Experiência em vários projetos pessoais, vide <Link to={'/portfolio'} className={styles.link}>portfólio</Link>
                        </p>
                        <li className={styles.textoPadrao}>Graduando em Engenharia de Computação</li>
                        <li className={styles.textoPadrao}>Programador full-stack</li>
                        {conhecimentos.map((itemLista, index) => <li key={index} className={styles.listaConhecimentos}>{itemLista}</li>)}
                        <div className={styles.botaoSobreMim}>
                            <BotaoPadrao texto='Sobre mim' to={'/sobremim'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}