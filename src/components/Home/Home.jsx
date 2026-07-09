import { useEffect } from 'react'
import styles from './Home.module.css'
import { FaArrowDown } from 'react-icons/fa'

const Home = () => {

    useEffect(() => {
        const video = document.createElement('video');
        const midiaBackground = document.querySelector(`.${styles.midiaBackground}`);

        video.src = './video/backgroundVideo.mp4';
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;

        // Garantir que o vídeo ocupe toda a área e corte nas laterais (object-fit: cover)
        video.style.width = '100%';
        video.style.height = '100dvh';
        video.style.objectFit = 'cover';
        video.style.objectPosition = 'center';
        video.style.position = 'absolute';
        video.style.inset = '0';
        video.style.left = '0';
        video.style.top = '0';
        video.style.opacity = '0';
        video.style.transition = 'opacity 400ms ease-in-out';

        video.addEventListener('canplay', () => {
            // esconder imagem de fallback quando vídeo estiver pronto
            if (midiaBackground) {
                const img = midiaBackground.querySelector('img');
                if (img) img.style.display = 'none';
            }
            video.style.opacity = '1';
        });

        if (midiaBackground) {
            midiaBackground.appendChild(video);
        }

        return () => {
            video.remove();
        }

    }, []); 

    return (
        <div className={styles.home}>
            <div className={styles.midiaBackground}>
                <img src="./image/background.jpg" alt="background" />
            </div>

            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <h1>Eliabe Lima</h1>
                    <p>Videommaker e Fotógrafo Profissional</p>
                </div>

                <div className={styles.circularTextContainer}>
                    <div className={styles.circularText}>
                        <p>ROLE A PÁGINA</p>
                        <span className={styles.arrowDown}><FaArrowDown /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;