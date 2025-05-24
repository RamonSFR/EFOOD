import { BrowserRouter } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'

import GlobalStyle from './styles/GlobalStyle'
import AppRoutes from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
