import { Routes, Route, Navigate } from 'react-router-dom'
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
import Demos from './componets/Demos'

const HomeRoute = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Resume
        experience={data.experience}
        education={data.education}
        skills={data.skills}
      />
      <Contact socialMedia={data.socialMedia} />
      <Demos />
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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
