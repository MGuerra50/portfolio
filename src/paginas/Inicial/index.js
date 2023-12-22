import Slides from '../../componentes/Slides';
import styles from './Inicial.module.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import imagem1 from '../../imagensTeste/1.png';
import imagem2 from '../../imagensTeste/2.png';
import imagem3 from '../../imagensTeste/3.png';

export default function Inicial () {

    const testeSlide = [imagem1, imagem2, imagem3];

    return (
        <div className={styles.slideShow}>

            
            <Slides imagens={testeSlide}/>

            <div className={styles.backgroundSlide}>
                <span className={styles.movimentoSlide}>
                
                    <div className={styles.botaoParteExterna}>
                        <IoIosArrowBack className={styles.iconSlide}/>
                    </div>
                
                    <span className={styles.espacoSlide}>
                        <div></div>
                        <div></div>
                        <div className={styles.item3DoGrid}>
                            <h1>
                                Olá, me chamo  Matheus
                            </h1>
                            <h3>
                                Graduando em Engenharia de Computação, e programador full-stack
                            </h3>
                        </div>
                        <div></div>
                        <div></div>
                        <div className={styles.item6DoGrid}>
                            <h3>Ver</h3>
                            <h3>Conteúdo</h3>
                        </div>
                    </span>
                
                    <div className={styles.botaoParteExterna}>
                        <IoIosArrowForward className={styles.iconSlide}/>
                    </div>
                    
                
                </span>
            </div>
        </div>
    );
}