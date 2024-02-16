import styles from './Contato.module.css';
import { IoPeopleSharp, IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import MoldeContainers from '../../componentes/MoldeContainers/Index';

export default function Contato() {
    return (
        <MoldeContainers>
            <div className={styles.paginaContato}>
                <h1 className={styles.tituloPagina}>Contato</h1>
                <div className={styles.contatos}>
                    <div className={styles.campoContato}>
                        <div className={styles.espacoIcon}>
                            <IoPeopleSharp className={styles.icon} />
                        </div>
                        <h1 className={styles.tituloContato}>Solial</h1>
                        <div className={styles.link}>
                            <span className={styles.organizacao}>
                                <a style={{ color: 'rgb(16, 154, 255)', fontWeight: 700 }}
                                    href='https://www.instagram.com/mrguerra.matheus?igsh=MTJxMmF6c2s4dGZjZw=='
                                ><FaInstagram /> Instagram
                                </a>
                            </span>
                            <span className={styles.organizacao}>
                                <a style={{ color: 'rgb(16, 154, 255)', fontWeight: 700 }}
                                    href='https://www.linkedin.com/in/matheus-guerra-martins-0778b9158/'
                                ><CiLinkedin /> Linkedin
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className={styles.campoContato} style={window.innerWidth>730?{ borderLeft: '2px solid #033473', borderRight: '2px solid #033473' }:{ borderLeft: 'none', borderRight: 'none' }}>
                        <div className={styles.espacoIcon}>
                            <MdOutlineMarkEmailRead className={styles.icon} />
                        </div>
                        <h1 className={styles.tituloContato}>Email</h1>
                        <div className={styles.link}>
                            <p style={{ color: 'rgb(16, 154, 255)', fontWeight: 700 }}
                            ><HiOutlineMailOpen /> matheusguerra5@hotmail.com
                            </p>
                        </div>
                    </div>
                    <div className={styles.campoContato}>
                        <div className={styles.espacoIcon}>
                            <GrContact className={styles.icon} />
                        </div>
                        <h1 className={styles.tituloContato}>Contato</h1>
                        <div className={styles.link}>
                            <a style={{ color: 'rgb(16, 154, 255)', fontWeight: 700 }}
                                href='https://wa.me/qr/6XAOSJLF5IUWL1'
                            ><IoLogoWhatsapp /> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </MoldeContainers>
    );
}