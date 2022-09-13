import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './config/theme'
import Home from './componets/Home'
import Header from './componets/Header'
import './scss/app.scss'
import 'animate.css'
import About from './componets/About'
import Resume from './componets/Resume'
import UnderConstruction from './componets/UnderConstruction'
import Contact from './componets/Contact'
import data from './data.json'
import PrivacyPolicy from './componets/PrivacyPolicy'

const HomeRoute = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Resume />
      <Contact socialMedia={data.social_medial} />
      <UnderConstruction />
    </>
  )
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<HomeRoute />} />
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
