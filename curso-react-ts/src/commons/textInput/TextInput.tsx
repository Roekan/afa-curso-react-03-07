import React from 'react'
import { errorCheck } from '../../services/useful';

export const TextInput = ({type, name, placeholder, design, state, errorState, password1}) => {

    const inputHandler = ({ target }, state) => {
        const { name, value } = target;
        state((prevState:any) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const errorHandler = ({target}, errorState:any, password1:any) =>{
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
