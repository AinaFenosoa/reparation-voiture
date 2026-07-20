import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Blog from './pages/Blog'

function App() {
  const location = useLocation()
  const isFullWidthPage = location.pathname === '/blog' || location.pathname === '/blog/all'

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </>
  )
}

export default App

