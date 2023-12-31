import InfoProjeto from '../../componentes/InfoProjeto';
import styles from './Portfolio.module.css';

export default function Portfolio () {

    const listaProjetos = [
        {
            nome: 'Jogo Da Velha',
            imagem: 'Imagem'
        }, {
            nome: 'Chat',
            imagem: 'Imagem'
        },{
            nome: 'Site de Portfólio',
            imagem: 'Imagem'
        },{
            nome: 'E commerce',
            imagem: 'Imagem'
        },{
            nome: 'Xadrez',
            imagem: 'Imagem'
        },{
            nome: 'Página de Login',
            imagem: 'Imagem'
        },{
            nome: 'Criador de Mapas Mentais',
            imagem: 'Imagem'
        },{
            nome: 'SnowBall',
            imagem: 'Imagem'
        },{
            nome: 'IA',
            imagem: 'Imagem'
        },{
            nome: 'Saas',
            imagem: 'Imagem'
        },{
            nome: 'Criador de Temas WordPress',
            imagem: 'Imagem'
        },{
            nome: 'Página de Captura',
            imagem: 'Imagem'
        }
    ];

    return (
        <div>
            <div className={styles.carrosselEspaco}>
                <h1 className={styles.titulo}>Meus projetos</h1>
                <div className={styles.carrossel}>
                    {listaProjetos.map((projeto)=><div>{projeto.nome}</div>)}
                </div>
            </div>
            <InfoProjeto />
        </div>
        
    )
}