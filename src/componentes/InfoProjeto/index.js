import styles from './InfoProjeto.module.css';
import BotaoPadrao from '../BotaoPadrao';
import Slides from '../Slides';
import imagem1 from '../../imagensTeste/1.png';
import imagem2 from '../../imagensTeste/2.png';
import imagem3 from '../../imagensTeste/3.png';
import { IoLogoGithub } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";

export default function InfoProjeto ({ projetoNome='Jogo Da Velha' }) {

    const slidesTeste = [imagem1, imagem2, imagem3];
    const projetos = [
        {
            nome: 'Jogo da velha para 2 jogadores',
            repositorio: 'https://github.com/MGuerra50/projeto_Jogo_Da_Velha',
            tecnologias: ['React', 'NodeJs', 'HTML', 'CSS'],
            texto: 'O projeto do Jogo da velha para 2 jogadores foi meu primeiro projeto, e consiste em um jogo da velha para duas pessoas jogarem na mesma máquina, onde a jogada entre um e outro é intercalada, um vez é X outra é O, e o número de vitórias é contabilizado para cada jogador. O diferencial desse projeto é utilizar de um design mais sofsticado, como transparência e blur, além de iluminações que vizam transmitir esse ar de sofstificação.'
        }
    ];
    const conhecimentos = [
        {
            nome: 'React',
            cor: '#5ED3F3',
            icon: <FaReact style={{color: '#5ED3F3'}} className={styles.icones}/>
        },
        {
            nome: 'NodeJs',
            cor: '#7CB73F',
            icon: <IoLogoNodejs style={{color: '#7CB73F'}} className={styles.icones}/>
        },{
            nome: 'PostgreSQL',
            cor: '#2F5E8D',
            icon: <BiLogoPostgresql style={{color: '#2F5E8D'}} className={styles.icones}/>
        },{
            nome: 'MER',
            cor: '#000000',
            icon: <FaProjectDiagram style={{color: '#000000'}} className={styles.icones}/>
        },{
            nome: 'HTML',
            cor: '#DD4B25',
            icon: <IoLogoHtml5 style={{color: '#DD4B25'}} className={styles.icones}/>
        },{
            nome: 'CSS',
            cor: '#254BDD',
            icon: <IoLogoCss3 style={{color: '#254BDD'}} className={styles.icones}/>
        }
    ];

    return(
        <div className={styles.tabelas}>
            <div className={styles.espacoTextos}>
                <div className={styles.textoParte1}>
                    <h1 className={styles.titulo}>Jogo da velha para 2 jogadores</h1>
                    <div className={styles.iconesTecnologiasUsadas}>
                        {conhecimentos.map(conhecimento=>{
                            return(
                                projetos[0].tecnologias.map((tecnologia, index)=>tecnologia.toLowerCase()===conhecimento.nome.toLowerCase()
                                    ?<div key={index} style={{width: 80/projetos[0].tecnologias.length+'%'}} className={styles.iconIndividual}>{conhecimento.icon}</div>:'')
                            )
                        })}
                    </div>
                    <p className={styles.desenvolvido}>Desenvolvido em 2023 | 
                        <a href={projetos[0].repositorio} className={styles.linkRepositorio}>{<IoLogoGithub />} GitHub do projeto</a>
                    </p>
                </div>
                <div className={styles.textoParte2}>
                    <p className={styles.textoSobreProjeto}>{projetos[0].texto}</p>
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