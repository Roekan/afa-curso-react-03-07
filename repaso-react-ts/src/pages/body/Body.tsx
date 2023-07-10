import {Navigate,Route, Routes} from 'react-router-dom'
import { Login } from '../login/Login'
import { Register } from '../register/Register'
import { Home } from '../home/Home'


export const Body = () => {
  return (
    <>
    <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register  />} />
    </Routes>
    </>
  )
}
