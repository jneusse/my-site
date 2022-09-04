import { ThemeProvider } from '@mui/material/styles'
import { theme } from './config/theme'
import Home from './componets/Home'
import Header from './componets/Header'
import './scss/app.scss'
import 'animate.css'
import About from './componets/About'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Home />
        <About />
      </ThemeProvider>
    </div>
  )
}

export default App
