import {Navigate,Route, Routes} from 'react-router-dom'
import { Login } from '../login/Login'
import { Register } from '../register/Register'
import { Home } from '../home/Home'
import { Profile } from '../userProfile/UserProfile'
import { Tienda } from '../tienda/Tienda'
import { Detail } from '../detail/Detail'


export const Body = () => {
  return (
    <>
    <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register  />} />
        <Route path="/profile" element={<Profile  />} />
        <Route path="/tienda" element={<Tienda  />} />
        <Route path="/detail" element={<Detail  />} />
    </Routes>
    </>
  )
}
