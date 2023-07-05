import React from 'react'
import { errorCheck } from '../../services/useful';

interface InputProps{
  name:string,
  type:string,
  placeholder:string,
  design:string,
  state:Function,
  errorState:Function,
  password1:string,
  password2:string,


}




export const TextInput = ({type, name, placeholder, design, state, errorState, password1}:InputProps) => {

    const inputHandler = ({ target }:React.MouseEvent<HTMLButtonElement>, state:InputProps) => {
        const { name, value } = target;
        state((prevState:any) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const errorHandler = ({target}:React.MouseEvent<HTMLButtonElement>, errorState:any, password1:any) =>{
        const {name, value} = target;
        const message:(string|undefined) = errorCheck(name, value, password1)
    
        errorState((prevState:any) => ({
          ...prevState,
          [name] : message
        }))
      }

  return (
    <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={design}
        onChange={(e)=>inputHandler(e, state)}
        onBlur={(e)=>errorHandler(e, errorState, password1)}

    />
  )
}
