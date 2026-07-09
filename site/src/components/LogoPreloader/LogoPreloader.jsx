import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LogoPreloader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  // Simula o tempo de carregamento ou espera o desenho acabar
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 segundos para dar tempo da animação brilhar
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "#111", 
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <div style={{ width: "300px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <motion.img
                src="/image/Logo.svg"
                alt="Logo"
                style={{ width: "300px", height: "180px" , objectFit: "cover", objectPosition: "center"}}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{scale: 99, transition: { duration: 2, ease: "easeInOut"}}}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                style={{ color: "white", textAlign: "center", fontFamily: "sans-serif", marginTop: "-20px", letterSpacing: "4px", fontSize: "2rem"}}
              >
                Filmes
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Renderiza o site apenas quando o loading acaba ou mantém por baixo */}
      {!loading && children}
    </>
  );
};

export default LogoPreloader;