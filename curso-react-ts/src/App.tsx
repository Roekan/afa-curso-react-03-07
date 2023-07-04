import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './commons/header/Header'
import {Footer} from './commons/footer/Footer'
import {Home} from './pages/home/Home'
import {Login} from './pages/login/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="*" element={<h2>'404 Not found'</h2>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
