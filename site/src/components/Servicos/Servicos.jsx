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
        <ServicosBox icon={<RiCameraAiLine />} title="Ensaio Fotografico" text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate"} 
        inclusos={["Sessão de fotos em estúdio ou externa", "Edição profissional das melhores fotos", "Entrega em alta resolução", "Galeria online para visualização e download"]}
        />

        <ServicosBox icon={<BsCameraReels />} title="Cobertura de Eventos" text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate"} 
        inclusos={["Cobertura de eventos sociais e corporativos ", "Edição profissional das melhores fotos", "Entrega em alta resolução", "Galeria online para visualização e download"]}
        />
        
        <ServicosBox icon={< FaUserTie />} title="Retrato Corporativo" text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate"} 
        inclusos={["Sessão de fotos em estúdio ou externa", "Edição profissional das melhores fotos", "Entrega em alta resolução", "Galeria online para visualização e download"]} 
        />
        
        <ServicosBox icon={<PiHamburger />} title="Fotografia Gastronomica" text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate"} 
        inclusos={["Sessão de fotos em estúdio ou externa", "Edição profissional das melhores fotos", "Entrega em alta resolução", "Galeria online para visualização e download"]} 
        />
        
        <ServicosBox icon={<BiMoviePlay />} title="Video Clip" text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate"} 
        inclusos={["Sessão de fotos em estúdio ou externa", "Edição profissional das melhores fotos", "Entrega em alta resolução", "Galeria online para visualização e download"]} 
        />
        
        <ServicosBox icon={<LiaPhotoVideoSolid />} title="Edição de Fotos e Vídeos" text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate"} 
        inclusos={["Sessão de fotos em estúdio ou externa", "Edição profissional das melhores fotos", "Entrega em alta resolução", "Galeria online para visualização e download"]} 
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
