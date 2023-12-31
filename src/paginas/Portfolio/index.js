import InfoProjeto from '../../componentes/InfoProjeto';
import styles from './Portfolio.module.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import imagem1 from '../../componentes/ImagensGamesTeste/1.png';
import imagem2 from '../../componentes/ImagensGamesTeste/2.png';
import imagem3 from '../../componentes/ImagensGamesTeste/3.png';
import imagem4 from '../../componentes/ImagensGamesTeste/4.png';
import imagem5 from '../../componentes/ImagensGamesTeste/5.png';
import imagem6 from '../../componentes/ImagensGamesTeste/6.png';
import imagem7 from '../../componentes/ImagensGamesTeste/7.png';
import imagem8 from '../../componentes/ImagensGamesTeste/8.png';
import imagem9 from '../../componentes/ImagensGamesTeste/9.png';
import imagem10 from '../../componentes/ImagensGamesTeste/10.png';
import imagem11 from '../../componentes/ImagensGamesTeste/11.png';
import imagem12 from '../../componentes/ImagensGamesTeste/12.png';
import { useState } from 'react';

export default function Portfolio () {

    const listaProjetos = [
        {
            nome: 'Jogo Da Velha',
            imagem: imagem1
        }, {
            nome: 'Chat',
            imagem: imagem2
        },{
            nome: 'Site de Portfólio',
            imagem: imagem3
        },{
            nome: 'E commerce',
            imagem: imagem4
        },{
            nome: 'Xadrez',
            imagem: imagem5
        },{
            nome: 'Página de Login',
            imagem: imagem6
        },{
            nome: 'Criador de Mapas Mentais',
            imagem: imagem7
        },{
            nome: 'SnowBall',
            imagem: imagem8
        },{
            nome: 'IA',
            imagem: imagem9
        },{
            nome: 'Saas',
            imagem: imagem10
        },{
            nome: 'Criador de Temas WordPress',
            imagem: imagem11
        },{
            nome: 'Página de Captura',
            imagem: imagem12
        },{
            nome: 'Página de Captura',
            imagem: imagem12
        },{
            nome: 'SnowBall',
            imagem: imagem8
        },{
            nome: 'IA',
            imagem: imagem9
        },{
            nome: 'Saas',
            imagem: imagem10
        },{
            nome: 'Criador de Temas WordPress',
            imagem: imagem11
        },{
            nome: 'Página de Captura',
            imagem: imagem12
        },{
            nome: 'Página de Captura',
            imagem: imagem12
        }
    ];

    const [posicaoCarrossel, setPosicaoCarrossel] = useState(0);

    function verificandoEstilo(index, posicaoProjeto) {
        const marginRight = index === 0 ? -posicaoCarrossel : 0;
        const marginLeft = index === 0 ? 7+'px' : 0; 
        const zIndex = index === 0 && posicaoCarrossel >= (225*5) ? -1 : 'auto';
        return { zIndex, marginLeft, marginRight, backgroundImage: `url(${posicaoProjeto.imagem})`};
      }

    function passagemCarrossel(sentido) {
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

      function trocaInfoProjeto (nomeProjeto){
        setTrocandoInfoProjeto(nomeProjeto);/* [ PROBLEMA DE re-renderização ] */
      }

    return (
        <div>
            <div className={styles.carrosselEspaco}>
                <h1 className={styles.titulo}>Meus projetos</h1>
                <div className={styles.carrossel}>
                    <div className={styles.botao}>
                        <IoIosArrowBack onClick={()=>passagemCarrossel('-')} className={styles.iconeBotao}/>
                    </div>
                    <div className={styles.itensCarrossel}>
                        {listaProjetos.map((projeto, index)=>{
                            return(
                                <div key={index} style={verificandoEstilo(index, projeto)} className={styles.espacoImagem}>
                                    <div onClick={()=>trocaInfoProjeto(projeto.nome)} style={{width: '225px'}}>
                                        <h2 className={styles.tituloProjeto}>{projeto.nome}</h2>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.botao}>
                        <IoIosArrowForward onClick={()=>passagemCarrossel('+')} className={styles.iconeBotao}/>
                    </div>
                </div>
            </div>
            <InfoProjeto projetoNome={trocandoInfoProjeto}/>
        </div>
        
    )
}