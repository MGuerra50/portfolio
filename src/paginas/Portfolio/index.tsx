import InfoProjeto from '../../componentes/InfoProjeto';
import styles from './Portfolio.module.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import listaProjetos from './listaProjetos.json';
import { useState } from 'react';
import MoldeContainers from '../../componentes/MoldeContainers/Index.js';

interface PropsProjetos {
    nome: string
    imagem: string
}

export default function Portfolio() {
    const [posicaoCarrossel, setPosicaoCarrossel] = useState(0);

    function passagemCarrossel(sentido: string) {
        const itemsPerPage = 5;
        const totalItems = listaProjetos.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        let novaPosicaoCarrossel = posicaoCarrossel;

        if (sentido === '+' && posicaoCarrossel < (totalPages - 1) * itemsPerPage * 225) {
            novaPosicaoCarrossel += itemsPerPage * 225;
        } else if (sentido === '-' && posicaoCarrossel > 0) {
            novaPosicaoCarrossel -= Math.min(itemsPerPage * 225, posicaoCarrossel);
        }

        setPosicaoCarrossel(novaPosicaoCarrossel);
    }

    const [trocandoInfoProjeto, setTrocandoInfoProjeto] = useState('Jogo Da Velha');

    function trocaInfoProjeto(nomeProjeto: string) {
        setTrocandoInfoProjeto(nomeProjeto);
    }

    function verificandoEstilo(projeto: { nome: string, imagem: string }, index: number) {
        const marginRight = index === 0 ? -posicaoCarrossel : 0;
        const marginLeft = index === 0 ? 7 + 'px' : 0;
        const zIndex = index === 0 && posicaoCarrossel >= (225 * 5) ? -1 : 'auto';
        const width = '225px';
        const height = '225px';
        return { width, height, zIndex, marginLeft, marginRight, backgroundImage: `url(${projeto.imagem})` };
    }

    return (
        <MoldeContainers>
            <div className={styles.carrosselEspaco}>
                <h1 className={styles.titulo}>Meus projetos</h1>
                <div className={styles.carrossel}>
                    <div className={styles.botao} style={{ marginLeft: '10px' }}>
                        <IoIosArrowBack onClick={() => passagemCarrossel('-')} className={styles.iconeBotao} />
                    </div>
                    <div className={styles.itensCarrossel}>

                        {listaProjetos.map((projeto: PropsProjetos, index: number) => {
                            return (
                                <div
                                    key={index}
                                    style={{ ...verificandoEstilo(projeto, index) }}
                                    className={styles.espacoImagem}
                                >

                                    <div onClick={() => trocaInfoProjeto(projeto.nome)} style={{ width: '225px' }}>
                                        <h2 className={styles.tituloProjeto}>{projeto.nome}</h2>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                    <div className={styles.botao} style={{ marginRight: '10px' }}>
                        <IoIosArrowForward onClick={() => passagemCarrossel('+')} className={styles.iconeBotao} />
                    </div>
                </div>
            </div>
            <InfoProjeto projetoNome={trocandoInfoProjeto} />
        </MoldeContainers>
    )
}