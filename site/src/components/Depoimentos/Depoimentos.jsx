import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Depoimentos.module.css";

const Depoimentos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const depoimentos = [
    {
      id: 1,
      nome: "Maria Silva",
      profissao: "Noiva",
      texto: "O ensaio ficou incrível! A sensibilidade nas fotos e a direção no vídeo fizeram nosso dia especial ser eternizado do jeito certo.",
      imagem: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      nome: "João Santos",
      profissao: "Empresário",
      texto: "O material para a campanha ficou impecável. A captação de imagem e o tratamento final deram uma identidade forte ao projeto.",
      imagem: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      nome: "Ana Costa",
      profissao: "Produtora de Eventos",
      texto: "O vídeo foi entregue dentro do prazo e a equipe trouxe uma narrativa visual muito criativa. Recomendamos para casamentos e eventos corporativos.",
      imagem: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      nome: "Carlos Oliveira",
      profissao: "Fotógrafo",
      texto: "Trabalho profissional e sensível. A direção de arte e a pós-produção elevaram o resultado para outro patamar.",
      imagem: "https://i.pravatar.cc/150?img=4",
    },
  ];

  const proximoDepoimento = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % depoimentos.length);
  };

  const depoimentoAnterior = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + depoimentos.length) % depoimentos.length
    );
  };

  const irParaDepoimento = (index) => {
    setCurrentIndex(index);
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.6 } },
  };

  const depoimentoAtual = depoimentos[currentIndex];

  return (
    <section className={styles.depoimentosSection}>
      <div className={styles.container}>
        <h1 className={styles.titulo}>O Que Nossos Clientes Dizem ?</h1>

        <div className={styles.carrossel}>
          <motion.div
            className={styles.card}
            key={currentIndex}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className={styles.cardTopie}>
              <motion.img
                src={depoimentoAtual.imagem}
                alt={depoimentoAtual.nome}
                className={styles.imagem}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className={styles.info}>
                <h3 className={styles.nome}>{depoimentoAtual.nome}</h3>
                <p className={styles.profissao}>{depoimentoAtual.profissao}</p>
              </div>
            </div>

            <div className={styles.estrelas}>
              {[...Array(5)].map((_, i) => (
                <span key={i} className={styles.estrela}>
                  ★
                </span>
              ))}
            </div>

            <p className={styles.texto}>{depoimentoAtual.texto}</p>
          </motion.div>

          {/* Botões de navegação */}
          <motion.button
            className={styles.botaoAnterior}
            onClick={depoimentoAnterior}
            // whileHover={{ scale: 1.1 }}
            // whileTap={{ scale: 0.95 }}
          >
            &#10094;
          </motion.button>

          <motion.button
            className={styles.botaoProximo}
            onClick={proximoDepoimento}
            // whileHover={{ scale: 1.1 }}
            // whileTap={{ scale: 0.95 }}
          >
            &#10095;
          </motion.button>
        </div>

        {/* Indicadores */}
        <div className={styles.indicadores}>
          {depoimentos.map((_, index) => (
            <motion.button
              key={index}
              className={`${styles.indicador} ${
                index === currentIndex ? styles.ativo : ""
              }`}
              onClick={() => irParaDepoimento(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
