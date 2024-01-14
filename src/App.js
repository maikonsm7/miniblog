import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Footer from './components/Footer'
import CreatePost from './pages/CreatePost'
import Dashboard from './pages/Dashboard'
// hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';
// context
import { AuthProvider } from './context/AuthContext';

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()
  const loadingUser = user === undefined

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }
  return (
    <div className="App">
      <AuthProvider value={{user}}>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/login'} element={!user ? <Login /> : <Navigate to='/'/>}/>
        <Route path={'/register'} element={!user ? <Register /> : <Navigate to='/'/>}/>
        <Route path={'/posts/create'} element={user ? <CreatePost /> : <Navigate to='/login'/>}/>
        <Route path={'/dashboard'} element={user ? <Dashboard /> : <Navigate to='/login'/>}/>
        <Route path={'/about'} element={<About />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App;
