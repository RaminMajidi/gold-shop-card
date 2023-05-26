import  {Routes,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { CartProvider } from './context/CartContext'
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Navbar from './components/Navbar'
import FooterSection from './components/FooterSection'

function App (){
  return(
    <CartProvider>
    <Navbar/>
    <Container>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
    </Routes>
    </Container>
    <FooterSection/>
    </CartProvider>
  )
}

export default App