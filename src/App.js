import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Service from './routes/Service'
import Blog from './routes/Blog'
import Footer from './components/Footer'
import News1 from './routes/news'

const App = () => {
  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/news1' element={<News1/>}/>
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
