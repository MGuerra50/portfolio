import { useEffect, useState } from 'react';
import styles from './Slides.module.css';

function verificaEstilo (index, slideAtual){
                        
    if(index === 0){
        return {marginRight: - slideAtual + '%'}
    } else {
        return {marginRight: 0}
    }
}

export default function Slides ({ imagens, tempo = 5 }) {  
   
    const [slideAtual, setSlideAtual] = useState(0);
    const movimentoMaxSlide = (imagens.length * 100) - 100;

    useEffect(()=>{
        const intervaloSlides = setInterval(()=>{
            
            if(slideAtual === movimentoMaxSlide){
                setSlideAtual(()=>0);
            } else {
                setSlideAtual(()=>slideAtual + 100);
            }

        }, tempo*1000);

        return() => clearInterval(intervaloSlides);
    }, [movimentoMaxSlide, slideAtual, tempo]);
    
    if (!imagens || imagens.length === 0) {
        return <div>Nenhuma imagem disponível.</div>;
      }      

        return (
        <div className={styles.slideShow}>

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