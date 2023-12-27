import styles from './Skills.module.css';

export default function Skills ({ conhecimentos }){

    const gerandoTabela = (tecnologia)=>{/*Fazer o GRID Aqui dentro da FUNÇÃO!*/
    let trocandoColuna = 0;
        for(let i = 0; i <= 1; i++){
            if(trocandoColuna === 0){
                return(
                    <>
                        <h3 style={{marginBottom: 1+'%'}}>{tecnologia.nome}</h3>
                        <div className={styles.barraExterna}>
                            <div style={{width: tecnologia.valor+'%', backgroundColor: `${tecnologia.cor}`}} className={styles.barraInterna}/>
                        </div>
                    </>
                );
            } else {
                return(
                    <div>
                        {tecnologia.icon}
                    </div>
                );
            }
        }
    }

    return (
        <div className={styles.skills}>
            <div className={styles.lado1Div}>
                <h1 className={styles.titulo}>Skills</h1>
                <p>
                    Eu busco desafios que permitam impulsionar meu desenvolvimento profissional, onde procuro manter sempre 
                    o perfeccionismo, tendo foco na excelência, e organização.
                </p>
                <li className={styles.lista}>
                    Em cada tarefa realizada procuro entregar o máximo de excelência, organização, no menor tempo possível. 
                    Para realizar isso, estou sempre buscando aprimorar minhas habilidades e conhecimentos.
                </li>
                <li className={styles.lista}>
                    Acredito que a união faz a força, e que, trabalhos com equipes colaborativas são fundamentais, diante 
                    disso busco participar de equipes em que todos andem em conjunto para bem do coletivo.
                </li>
                <li className={styles.lista}>
                    Sou muito profissional, de maneira que mantenho sempre uma postura de acordo, enxergando a ética, a 
                    pontualidade, a transparência, e a clareza como valores fundamentais no ambiente de trabalho.
                </li>
                <li className={styles.lista}>
                    Possuo facilidade natural para ensinar colegas de equipe, posto isso, reconheço a fundamentalidade de 
                    compartilhar conhecimento em uma equipe para alcançar o sucesso.
                </li>
            </div>
            <div className={styles.lado2Div}>
                <h1 className={styles.titulo}>Tecnologias</h1>
                
                <div className={styles.tabelaConhecimentos}>
                    {conhecimentos.map((tecnologia)=>{
                        return(
                            <div className={styles.itemLista}>
                                {gerandoTabela(tecnologia)}
                            </div>
                        );
                    })}
                </div>
                
            </div>
        </div>
    );
}
{/*
                <h3 style={{marginBottom: 1+'%'}}>{tecnologia.nome}</h3>
                            <div className={styles.barraExterna}>
                                <div style={{width: tecnologia.valor+'%', backgroundColor: `${tecnologia.cor}`}} className={styles.barraInterna}/>
                                {tecnologia.icon}
                            </div>
*/}