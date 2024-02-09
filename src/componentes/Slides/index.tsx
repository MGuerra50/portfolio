import { useEffect, useState } from 'react';
import styles from './Slides.module.css';

interface PropsSlides {
    imagens: string[]
    passagemSlides?: number
    tempo?: number
    largura?: string
    altura?: string
}

function verificaEstilo (index: number, slideAtual: number){
                        
    if(index === 0){
        return {marginRight: - slideAtual + '%'}
    } else {
        return {marginRight: 0}
    }
}

export default function Slides ({ imagens, passagemSlides = 100, tempo = 5, largura = '1220px', altura = '607px' } : PropsSlides) {  
   
    const [slideAtual, setSlideAtual] = useState(0);
    const movimentoMaxSlide = (imagens.length * passagemSlides) - passagemSlides;

    useEffect(()=>{
        const intervaloSlides = setInterval(()=>{
            
            if(slideAtual === movimentoMaxSlide){
                setSlideAtual(()=>0);
            } else {
                setSlideAtual(()=>slideAtual + passagemSlides);
            }

        }, tempo*1000);

        return() => clearInterval(intervaloSlides);
    }, [movimentoMaxSlide, passagemSlides, slideAtual, tempo]);
    
    if (!imagens || imagens.length === 0) {
        return <div>Nenhuma imagem disponível.</div>;
      }      

        return (
        <div style={{width: largura, height: altura}} className={styles.slideShow}>

            {imagens.map((imagemAtual, index)=>{        
                return (
                    <div key={index} style={verificaEstilo(index, slideAtual)} className={styles.elementoSlide}>
                        <img src={imagemAtual} alt={`slide ${index+1}`}/>
                    </div>);
                }
            )}

        </div>
    );
}