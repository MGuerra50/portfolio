import styles from './Slides.module.css';

export default function Slides ({ imagens, tempo = 2, posicao }) {    

    return (
        <div className={styles.slideShow}>
            <div className={styles.slides}>
                <input type='radio' name='botaoCircular' className={styles.circulo1}/>
                <input type='radio' name='botaoCircular' className={styles.circulo2}/>
                <input type='radio' name='botaoCircular' className={styles.circulo3}/>
                <input type='radio' name='botaoCircular' className={styles.circulo4}/>
            </div>
            {imagens.map((imagemAtual, index)=>{
                return (
                    <div className={styles.elementoSlide}>
                        <img key={index} src={imagemAtual} alt={`slide ${index+1}`}/>
                    </div>);
            })}
            <div className={styles.navegacaoAutomatica}>
                <div className={styles.botao1Auto}/>
                <div className={styles.botao2Auto}/>
                <div className={styles.botao3Auto}/>
                <div className={styles.botao4Auto}/>
            </div>
            <div className={styles.navegacaoManual}>
                <label for = {styles.circulo1} className={styles.botaoManual}/>
                <label for = {styles.circulo2} className={styles.botaoManua2}/>
                <label for = {styles.circulo3} className={styles.botaoManua3}/>
                <label for = {styles.circulo4} className={styles.botaoManua4}/>
            </div>
        </div>
    );
}