import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'

import { Global, theme } from './global/StyleGlobal'
import { ThemeProvider } from 'styled-components'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Global />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default App