import styles from './SobreMim.module.css';
import imagem from '../../componentes/Resumo/fotoResumo.jpeg';

export default function SobreMim () {
    return(
        <div className={styles.sobreMim}>
            <div className={styles.apresentacao}>
                <p className={styles.destaque}>Estagiário</p>
                <div className={styles.divImagem}>
                    <img className={styles.imagem} src={imagem} alt='Homem de camisa azul'/>
                </div>
                <p className={styles.destaque}>Matheus Guerra</p>
                <p className={styles.habilidades}>Programador full-stack</p>
                <p className={styles.habilidades}>Graduando em Engenharia de Computação</p>
            </div>
            <div className={styles.texto}>
                <h1 style={{margin: 0}}>Olá, me chamo  Matheus</h1>
                <p>
                    Desde de bem novo eu sempre me interessei por computadores, tanto o hardware, quanto o software. 
                    Eu sempre quis saber como construir um computador, entender como o mundo físico interage com mundo lógico.
                </p>
                <p>
                    Além disso, quando mais novo eu ficava muito curioso para entender, como os jogos funcionam? 
                </p>
                <p>
                    E diante dessa curiosidade e paixão por tecnologia, decidi seguir profissionalmente na área, por isso, hoje faço 
                    faculdade de Engenharia de Computação, e ainda estou estudando programação por conta própria, e meu objetivo é aprimorar 
                    constantemente minhas habilidades nessa área tão empolgante.
                </p>
            </div>
        </div>
    );
}