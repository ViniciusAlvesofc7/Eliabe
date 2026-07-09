import { FaInstagram, FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


import style from './Contato.module.css'

const Contato = () => {
    return (
        <section className={style.contato}>
            <h1>Contato</h1>

            <div className={style.contatoContainer}>
                <div className={style.contatoVideo}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/jgvhJdpuCbs?si=dUub92WwcBYtEigc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div className={style.contatoInfo}>
                    <a href="https://www.youtube.com/@DJEFILMESELIABELIMAOFICIAL" target="_blank" rel="noreferrer" className={style.contatoLogo}>
                        <div className={style.contatoLogoImg}></div>

                        <p>@DJEFILMESELIABELIMAOFICIAL</p>
                    </a>


                    <div className={style.contatoSocial}>
                        <a href="https://www.instagram.com/djefilmeseliabelimaoficial/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href="https://www.youtube.com/@DJEFILMESELIABELIMAOFICIAL" target="_blank" rel="noreferrer"><FaYoutube /></a>
                        
                    </div>

                    <a className={style.contatoButton} href="https://api.whatsapp.com/send?phone=5581988619647" target="_blank" rel="noreferrer">Entre em Contato</a>
                </div>

            </div>

        </section>
    )
}

export default Contato
