import { ThemeProvider } from '@mui/material/styles'
import { theme } from './config/theme'
import About from './componets/About'
import Header from './componets/Header'
import './scss/app.scss'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <About />
      </ThemeProvider>
    </div>
  )
}

export default App
