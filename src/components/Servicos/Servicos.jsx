import styles from './Servicos.module.css'
import ServicosBox from './ServicosBox/ServicosBox'
import { RiCameraAiLine } from 'react-icons/ri'
import { BsCameraReels } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { PiHamburger } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { motion } from 'framer-motion'

const Servicos = () => {
  return (
    <div className={styles.container}>
      <h1>Serviços</h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className={styles.servicosBox}>
        <ServicosBox icon={<RiCameraAiLine />} title="Fotografia e Filmagem" text={"Registro profissional de casamentos, aniversários, ensaios fotográficos, feiras, congressos, eventos corporativos e festas acadêmicas, capturando cada detalhe com qualidade e sensibilidade. As imagens são entregues tratadas em alta resolução e os  vídeos, disponibilizados por meio de um link para download. Um serviço pensado para preservar seus melhores momentos com excelência!"} 
        inclusos={["Fotos Tratadas", "Filmagem Profissional", "Cobertura Completa", "Entrega Online"]}
        />
        
        <ServicosBox icon={<BiMoviePlay />} title="Videoclipe Evangélico" text={"Produção de videoclipes evangélicos com captação, direção criativa e edição profissional para destacar cada momento da sua música. Todos os pacotes incluem 2 teasers exclusivos (pré e pós-lançamento), 10 fotos digitais, tirada no dia, não cobro a gasolina para gravações na região metropolitana do Recife e temos opção de imagens aéreas cinematográficas com drone valor extra por fora. Local pago da Gravação por conta do Cliente e a artes da miniatura do YouTube ficam por conta do cliente."} 
        inclusos={["Produção Cinematográfica", "Teasers Inclusos", "Fotos para Thumbnail", "Drone em 4K (Opcional)"]} 
        />

      </motion.div>

      {/* <div className={styles.orcamento}>
        <span className={styles.pingShadow}></span>

        <a href="#">Fazer Orçamento</a>
      </div> */}
    </div>
  )
}

export default Servicos
