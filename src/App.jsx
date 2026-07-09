import Biblioteca from './components/Biblioteca/Biblioteca'
import Contato from './components/Contato/Contato'
import Depoimentos from './components/Depoimentos/Depoimentos'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Servicos from './components/Servicos/Servicos'
import Sobre from './components/Sobre/Sobre'
import Whatsapp from './components/Whatsapp/Whatsapp'

function App() {


  return (
    <>
      <Whatsapp />
      <Home />
      <Sobre />
      <Servicos />
      <Biblioteca />
      <Depoimentos />
      <Contato />
      <Footer />
    </>
  )
}

export default App
