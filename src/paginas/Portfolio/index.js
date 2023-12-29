import InfoProjeto from '../../componentes/InfoProjeto';
import styles from './Portfolio.module.css';

export default function Portfolio () {

    const listaProjetos = ['Jogo Da Velha', 'Chat', 'Site de Portfólio', 'E commerce', 'Xadrez', 'Página de Login', 'Criador de Mapas Mentais', 'SnowBall', 'IA', 'Saas', 'Criador de Temas WordPress', 'Página de Captura'];

    return (
        <div>
            <div className={styles.carrosselEspaco}>
                <h1 className={styles.titulo}>Meus projetos</h1>
                <div className={styles.carrossel}>
                    
                </div>
            </div>
            <InfoProjeto />
        </div>
        
    )
}