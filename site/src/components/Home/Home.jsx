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

        video.style.opacity = 0;

        video.addEventListener('canplay', () => {
            video.style.opacity = 1;
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