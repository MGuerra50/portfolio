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
import { useState } from 'react';

const InfoProjeto = ({ projetoNome, ativo = false }) => {

    const projetos = [
        {
            nome: 'Jogo da velha',
            repositorio: 'https://github.com/MGuerra50/projeto_Jogo_Da_Velha',
            desenvolvido: 2023,
            tecnologias: ['React', 'NodeJs', 'HTML', 'CSS'],
            texto: 'O projeto do Jogo da velha para 2 jogadores foi meu primeiro projeto, e consiste em um jogo da velha para duas pessoas jogarem na mesma máquina, onde a jogada entre um e outro é intercalada, um vez é X outra é O, e o número de vitórias é contabilizado para cada jogador. O diferencial desse projeto é utilizar de um design mais sofsticado, como transparência e blur, além de iluminações que vizam transmitir esse ar de sofstificação.',
            imagensProjeto: [imagem1, imagem2, imagem3]
        },{
            nome: 'Portfólio',
            repositorio: 'https://github.com/MGuerra50/portfolio',
            desenvolvido: 2023,
            tecnologias: ['React', 'NodeJs', 'PostgreSQL', 'MER', 'HTML', 'CSS'],
            texto: 'O projeto do Portfólio é o meu segundo projeto, meu objetivo com ele foi o de aprimorar minhas habilidades desenvolvendo um sistema que una todos meus conhecimentos em um só, sendo esse adaptável e podendo ser expansível com o tempo, além de fácil manutenção. Ele foi desenvolvido considerando o conceito de SPA, e o maior desafio encontrado no seu desenvolvimento foi o banco de dados, tendo em vista que apesar de ter estudado, nunca aprendi a integrar o banco com o sistema, mas apesar isso, o desenvolvimento desse projeto permitiu a expanção dos meus conhecimentos.',
            imagensProjeto: [imagem2, imagem3, imagem1]
        },{
            nome: 'Chat',
            repositorio: 'https://github.com/MGuerra50/portfolio',
            desenvolvido: 2023,
            tecnologias: ['React', 'NodeJs', 'PostgreSQL', 'MER', 'HTML', 'CSS'],
            texto: 'O projeto do Portfólio é o meu segundo projeto, meu objetivo com ele foi o de aprimorar minhas habilidades desenvolvendo um sistema que una todos meus conhecimentos em um só, sendo esse adaptável e podendo ser expansível com o tempo, além de fácil manutenção. Ele foi desenvolvido considerando o conceito de SPA, e o maior desafio encontrado no seu desenvolvimento foi o banco de dados, tendo em vista que apesar de ter estudado, nunca aprendi a integrar o banco com o sistema, mas apesar isso, o desenvolvimento desse projeto permitiu a expanção dos meus conhecimentos.',
            imagensProjeto: [imagem3, imagem2, imagem3]
        },{
            nome: 'E commerce',
            repositorio: 'https://github.com/MGuerra50/portfolio',
            desenvolvido: 2023,
            tecnologias: ['React', 'NodeJs', 'PostgreSQL', 'MER', 'HTML', 'CSS'],
            texto: 'O projeto do Portfólio é o meu segundo projeto, meu objetivo com ele foi o de aprimorar minhas habilidades desenvolvendo um sistema que una todos meus conhecimentos em um só, sendo esse adaptável e podendo ser expansível com o tempo, além de fácil manutenção. Ele foi desenvolvido considerando o conceito de SPA, e o maior desafio encontrado no seu desenvolvimento foi o banco de dados, tendo em vista que apesar de ter estudado, nunca aprendi a integrar o banco com o sistema, mas apesar isso, o desenvolvimento desse projeto permitiu a expanção dos meus conhecimentos.',
            imagensProjeto: [imagem1, imagem1, imagem3]
        },{
            nome: 'Xadrez',
            repositorio: 'https://github.com/MGuerra50/portfolio',
            desenvolvido: 2023,
            tecnologias: ['React', 'NodeJs', 'PostgreSQL', 'MER', 'HTML', 'CSS'],
            texto: 'O projeto do Portfólio é o meu segundo projeto, meu objetivo com ele foi o de aprimorar minhas habilidades desenvolvendo um sistema que una todos meus conhecimentos em um só, sendo esse adaptável e podendo ser expansível com o tempo, além de fácil manutenção. Ele foi desenvolvido considerando o conceito de SPA, e o maior desafio encontrado no seu desenvolvimento foi o banco de dados, tendo em vista que apesar de ter estudado, nunca aprendi a integrar o banco com o sistema, mas apesar isso, o desenvolvimento desse projeto permitiu a expanção dos meus conhecimentos.',
            imagensProjeto: [imagem2, imagem3, imagem2]
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

    function verificaTexto (texto){
        const limite = 433;
        if(texto.length > limite){
            const novoTexto = `${texto.substring(0, limite)}...`
            return novoTexto
        } else{
            return texto;
        }
    }

    const [projetoSelecionado, setProjetoSelecionado] = useState({...projetos[0]});
    
    const projetoEmExibicao = projetos.find((projeto)=>projeto.nome.toLowerCase() === projetoNome.toLowerCase());

    if(projetoSelecionado.nome.toLowerCase() !== projetoEmExibicao.nome.toLowerCase()) setProjetoSelecionado({...projetoEmExibicao});

    
    return(
        <div className={styles.tabelas}>
            <div className={styles.espacoTextos}>
                <div className={styles.textoParte1}>
                    <h1 className={styles.titulo}>{projetoSelecionado.nome}</h1>
                    <div className={styles.iconesTecnologiasUsadas}> 
                        {conhecimentos.map(conhecimento=>{
                            return(
                                projetoSelecionado.tecnologias.map((tecnologia, index)=>tecnologia.toLowerCase()===conhecimento.nome.toLowerCase()
                                    ?<div key={index} style={{width: 80/projetoSelecionado.tecnologias.length+'%'}} className={styles.iconIndividual}>{conhecimento.icon}</div>:'')
                            )
                        })}
                    </div>
                    <p className={styles.desenvolvido}>Desenvolvido em {`${projetoSelecionado.desenvolvido}`} | 
                        <a href={projetoSelecionado.repositorio} className={styles.linkRepositorio}>{<IoLogoGithub />} GitHub do projeto</a>
                    </p>
                </div>
                <div className={styles.textoParte2}>
                    <p className={styles.textoSobreProjeto}>{verificaTexto(projetoSelecionado.texto)}</p>
                </div>
            </div>
            <div className={styles.espacoImagem}>
                <div className={styles.slideQuadrado}>
                    <Slides imagens={projetoSelecionado.imagensProjeto}/>
                </div>
                <div className={styles.botao}>
                    <BotaoPadrao texto='Contato' to={'/contato'}/>
                </div>
            </div>
        </div>
    );
}

export default InfoProjeto;