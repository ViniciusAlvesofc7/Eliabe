import styles from './Whatsapp.module.css'
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <div className={styles.whatsappContainer}>
        <a href="https://api.whatsapp.com/send?phone=5581988619647" target="_blank" rel="noreferrer">
            <FaWhatsapp className={styles.whatsappIcon} />
        </a>
    </div>
  )
}

export default Whatsapp
