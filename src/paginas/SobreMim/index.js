import styles from './SobreMim.module.css';
import imagem from '../../componentes/Resumo/fotoResumo.jpeg';
import Skills from '../../componentes/Skills';
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import MoldeContainers from '../../componentes/MoldeContainers/Index';

export default function SobreMim() {

    const conhecimentos = [
        {
            nome: 'React',
            valor: 90,
            cor: '#5ED3F3',
            icon: <FaReact style={{ color: '#5ED3F3' }} className={styles.icones} />
        },
        {
            nome: 'NodeJs',
            valor: 93,
            cor: '#7CB73F',
            icon: <IoLogoNodejs style={{ color: '#7CB73F' }} className={styles.icones} />
        }, {
            nome: 'PostgreSQL',
            valor: 80,
            cor: '#2F5E8D',
            icon: <BiLogoPostgresql style={{ color: '#2F5E8D' }} className={styles.icones} />
        }, {
            nome: 'MER',
            valor: 90,
            cor: '#000000',
            icon: <FaProjectDiagram style={{ color: '#000000' }} className={styles.icones} />
        }, {
            nome: 'HTML',
            valor: 78,
            cor: '#DD4B25',
            icon: <IoLogoHtml5 style={{ color: '#DD4B25' }} className={styles.icones} />
        }, {
            nome: 'CSS',
            valor: 75,
            cor: '#254BDD',
            icon: <IoLogoCss3 style={{ color: '#254BDD' }} className={styles.icones} />
        }
    ];

    return (
        <MoldeContainers>
            <div className={styles.sobreMim}>
                <div className={styles.apresentacao}>
                    <p className={styles.destaque}>Estagiário</p>
                    <div className={styles.divImagem}>
                        <img className={styles.imagem} src={imagem} alt='Homem de camisa azul' />
                    </div>
                    <p className={styles.destaque}>Matheus Guerra</p>
                    <p className={styles.habilidades}>Programador full-stack</p>
                    <p className={styles.habilidades}>Graduando em Engenharia de Computação</p>
                </div>
                <div className={styles.texto}>
                    <h1 style={{ margin: 0 }}>Olá, me chamo  Matheus</h1>
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
            <Skills conhecimentos={conhecimentos} />
        </MoldeContainers>
    );
}