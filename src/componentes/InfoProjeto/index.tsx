import styles from './InfoProjeto.module.css';
import BotaoPadrao from '../BotaoPadrao/index.js';
import Slides from '../Slides/index.js';
import projetos from './projetos.json';
import { IoLogoGithub } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { useState } from 'react';

interface Props {
    projetoNome: string
    ativo?: boolean
}

interface PropsProjetos {
    nome: string;
    repositorio: string;
    desenvolvido: number;
    tecnologias: string[];
    texto: string;
    imagensProjeto: string | string[];
}

const InfoProjeto = ({ projetoNome, ativo = false }: Props) => {

    const conhecimentos = [
        {
            nome: 'React',
            cor: '#5ED3F3',
            icon: <FaReact style={{ color: '#5ED3F3' }} className={styles.icones} />
        },
        {
            nome: 'NodeJs',
            cor: '#7CB73F',
            icon: <IoLogoNodejs style={{ color: '#7CB73F' }} className={styles.icones} />
        }, {
            nome: 'PostgreSQL',
            cor: '#2F5E8D',
            icon: <BiLogoPostgresql style={{ color: '#2F5E8D' }} className={styles.icones} />
        }, {
            nome: 'MER',
            cor: '#000000',
            icon: <FaProjectDiagram style={{ color: '#000000' }} className={styles.icones} />
        }, {
            nome: 'HTML',
            cor: '#DD4B25',
            icon: <IoLogoHtml5 style={{ color: '#DD4B25' }} className={styles.icones} />
        }, {
            nome: 'CSS',
            cor: '#254BDD',
            icon: <IoLogoCss3 style={{ color: '#254BDD' }} className={styles.icones} />
        }
    ];

    function verificaTexto(texto: string) {
        const limite = 433;
        if (texto.length > limite) {
            const novoTexto = `${texto.substring(0, limite)}...`
            return novoTexto
        } else {
            return texto;
        }
    }

    const [projetoSelecionado, setProjetoSelecionado] = useState({ ...projetos[0] });

    const projetoEmExibicao: PropsProjetos | undefined = projetos.find(
        (projeto: PropsProjetos) => projeto.nome.toLowerCase() === projetoNome.toLowerCase()
    );

    if (projetoEmExibicao)
        if (projetoSelecionado.nome.toLowerCase() !== projetoEmExibicao.nome.toLowerCase())
            setProjetoSelecionado({ ...projetoEmExibicao });

    return (
        <div className={styles.tabelas}>
            <div className={styles.espacoTextos}>
                <div className={styles.textoParte1}>
                    <h1 className={styles.titulo}>{projetoSelecionado.nome}</h1>
                    <div className={styles.iconesTecnologiasUsadas}>
                        {conhecimentos.map(conhecimento => {
                            return (
                                projetoSelecionado.tecnologias.map(
                                    (tecnologia: string, index: number) => tecnologia.toLowerCase() === conhecimento.nome.toLowerCase()
                                        ? <div
                                            key={index}
                                            style={{ width: 80 / projetoSelecionado.tecnologias.length + '%' }}
                                            className={styles.iconIndividual}
                                        >
                                            {conhecimento.icon}
                                        </div>
                                        : '')
                            )
                        })}
                    </div>
                    <p className={styles.desenvolvido}>Desenvolvido em {`${projetoSelecionado.desenvolvido}`} |
                        <a
                            href={projetoSelecionado.repositorio}
                            className={styles.linkRepositorio}>
                            {<IoLogoGithub />} GitHub do projeto
                        </a>
                    </p>
                </div>
                <div className={styles.textoParte2}>
                    <p className={styles.textoSobreProjeto}>{verificaTexto(projetoSelecionado.texto)}</p>
                </div>
            </div>
            <div className={styles.espacoImagem}>
                <div className={styles.slideQuadrado}>
                    <Slides imagens={projetoSelecionado.imagensProjeto} />
                </div>
                <div className={styles.botao}>
                    <BotaoPadrao texto='Contato' to={'/contato'} />
                </div>
            </div>
        </div>
    );
}

export default InfoProjeto;