import { FaArrowRight } from 'react-icons/fa'
import Style from './ServicosBox.module.css'

const ServicosBox = (props) => {
  return (
    <div className={Style.servicosBox}>
      <div className={Style.servicosBoxHeader}>
        <div className={Style.servicosBoxIcon}>
          {props.icon}
        </div>
        <h2>
          {props.title}
        </h2>
      </div>

      <p>
        {props.text}
      </p>

      <ul className={Style.servicosBoxList}>
        {props.inclusos && props.inclusos.map((item, index) => (
          <li key={index}>
            {/* Container do ponto animado */}
            <div className={Style.dotContainer}>
              <div className={Style.spanShadow}></div>
              <span></span>
            </div>
            {/* Texto do item */}
            {item}
          </li>
        ))}
      </ul>

      <div className={Style.servicosBoxButton}>
        <a href="https://api.whatsapp.com/send?phone=5581988619647" target="_blank" rel="noreferrer">Solicitar Orçamento <FaArrowRight className={Style.BtnSeta} /> </a>

      </div>
    </div>
  )
}

export default ServicosBox
