import { BrowserRouter } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'

import GlobalStyle from './styles/GlobalStyle'
import AppRoutes from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
