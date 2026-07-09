import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Biblioteca.module.css';

const images = [
    '/image/Biblioteca/img1.jpg',
    '/image/Biblioteca/img2.jpg',
    '/image/Biblioteca/img3.jpg',
    '/image/Biblioteca/img4.jpg',
    '/image/Biblioteca/img5.jpg',
];

export default function Biblioteca() {
    const [activeIndex, setActiveIndex] = useState(2); // Começa na imagem do meio

    const next = () => setActiveIndex((prev) => (prev + 1) % images.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <main className={styles.biblioteca}>
            <div className={styles.backgroundShadow}></div>

            <h1>Fotografias</h1>

            <div className={styles.mask}>
                <div className={styles.carouselContainer}>
                    <AnimatePresence initial={false}>
                        {images.map((img, i) => {
                            // Cálculo da distância do item atual para o centro
                            const offset = i - activeIndex;
                            const isCenter = i === activeIndex;

                            return (
                                // ... dentro do mapeamento das imagens
                                <motion.li
                                    key={i}
                                    className={styles.item}
                                    // --- NOVAS PROPRIEDADES DE DRAG ---
                                    drag="x" // Permite arrastar no eixo X
                                    dragConstraints={{ left: 0, right: 0 }} // Faz o item voltar para o centro após soltar
                                    dragMomentum={false}
                                    onDragEnd={(e, info) => {
                                        const swipeDistance = info.offset.x;
                                        const swipeVelocity = info.velocity.x;

                                        if (swipeDistance < -80 || swipeVelocity < -500) {
                                            next(); // Arrastou para a esquerda (próxima)
                                        } else if (swipeDistance > 80 || swipeVelocity > 500) {
                                            prev(); // Arrastou para a direita (anterior)
                                        }
                                    }}
                                    // ---------------------------------
                                    initial={false}
                                    animate={{
                                        x: offset * 120,
                                        rotateY: isCenter ? 0 : offset > 0 ? -45 : 45,
                                        scale: isCenter ? 1 : 0.75,
                                        zIndex: 100 - Math.abs(offset),
                                        opacity: Math.abs(offset) > 2 ? 0 : 1,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30
                                    }}
                                    style={{ perspective: 1000 }}
                                >
                                    <img
                                        src={img}
                                        alt={`Slide ${i}`}
                                        className={styles.photo}
                                        draggable="false" // IMPORTANTE: impede que o navegador tente arrastar a imagem nativamente
                                    />
                                </motion.li>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Botões Opcionais ou clique direto no carrossel */}
            </div>

        </main>
    );
}