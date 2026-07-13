import styles from './Sobre.module.css'
import { motion } from 'framer-motion'

const Sobre = () => {
    return (
        <div className={styles.sobre}>
            <div className={styles.sobreContainer}>
                <div className={styles.sobreImg}>
                    <motion.img
                        initial={{ filter: 'grayscale(100%)' }}
                        whileInView={{ filter: 'grayscale(0%)' }}
                        transition={{ duration: 3, ease: 'easeInOut' }}
                        src="../image/eliabe.png" alt="Eliabe" />

                </div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className={styles.sobreText}>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}>
                        Sobre Mim
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 50, efect: 'blur(5px)' }}
                        whileInView={{ opacity: 1, x: 0, efect: 'blur(0px)' }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}>
                        <strong>Eliabe Lima</strong> é um produtor de vídeo e fotógrafo que une técnica, sensibilidade e fé em cada projeto. Como Cristão Evangélico, ele enxerga o seu trabalho como uma vocação divina. Por isso, Eliabe não busca apenas registrar imagens, mas entregar o seu absoluto melhor em cada detalhe. Sua filosofia profissional é clara: tudo o que faz é direcionado primeiramente a Deus, como um ato de adoração, e, consequentemente, ao cliente, como um selo de excelência, dedicação e respeito.</motion.p>
                </motion.div>
            </div>

            <div className={styles.sobreVersiculo}>
                <div className={styles.versiculoText}>
                    <p>"Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens"   <span>Colossenses 3:23.</span> </p>
                    <p>"Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens"     <span>Colossenses 3:23.</span> </p>
                </div>
            </div>
        </div>
    )
}

export default Sobre
