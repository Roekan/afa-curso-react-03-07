import axios from 'axios'

const URL = 'https://express-api-basic.vercel.app'; // API pruebas Mara
const RM_URL = 'https://rickandmortyapi.com/api';

interface LoginData{
    email:string,
    password:string
}

export const logUser = async (body:LoginData) => {
    const res = await axios.post(`${URL}/auth/login`,body)
console.log(res.data)
    return res.data
}



export const getCharacters = async () => {
    const {data} = await axios.get(`${RM_URL}/character`)

    return data.results
}

export const getOneCharacter = async(id:string)=>{
    const {data} = await axios.get(`${RM_URL}/character/${id}`)
    return data
}

export const getCharacterByName = async (name:string)=>{
    const {data} = await axios.get(`${RM_URL}/character/?name=${name}`)
    return data.results
}