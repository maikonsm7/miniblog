import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/login'} element={<Login />}/>
        <Route path={'/register'} element={<Register />}/>
        <Route path={'/about'} element={<About />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
