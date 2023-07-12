import {useEffect, useState} from 'react'


import {useSelector} from 'react-redux';
import { userData } from '../userSlice';
import { useNavigate } from 'react-router-dom';

export const Tienda = () => {


const reduxUserCredentials = useSelector(userData);

const Navigate = useNavigate();

useEffect(()=>{
    if(!reduxUserCredentials.credentials?.token){
        Navigate("/");
    }
}, [reduxUserCredentials])


  return (

    <div>Datos de tienda</div>

  )
}
