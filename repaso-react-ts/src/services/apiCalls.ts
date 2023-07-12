import axios from 'axios'

const URL = "https://express-api-basic.vercel.app";
const RM_URL = 'https://rickandmortyapi.com/api';



interface LoginData{
    email:string;
    password:string;
}

export const bringCharacters = async () => {
    const {data} = await axios.get(`${RM_URL}/character`)

    return data.results
}

export const bringCharactersName = async (page, name) => {
    console.log('NAmE: ', name, 'PAGE: ', page)
    const {data} = await axios.get(`${RM_URL}/character/?page=${page}&name=${name}`)
    return data
}

export const logMe = async (body: LoginData)=>{

    // let res = await axios.post(`${URL}/auth/login`, body);

    const res = {
        token:"ñlkasdñlkasdñlkasdñlk",
        name: "Alvaro1",
        id:5,
        age:37
    }
    return res;
}