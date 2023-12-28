import styles from './InfoProjeto.module.css';

export default function InfoProjeto () {
    return(
        <div className={styles.tabelas}>
            <div className={styles.espacoTextos}>
                <div>
                    <h1 className={styles.titulo}>Olá</h1>
                </div>
                <div>
                    <p>Texto</p>
                </div>
            </div>
            <div className={styles.espacoImagem}>
                {/*<img/>*/}
            </div>
        </div>
    );
}