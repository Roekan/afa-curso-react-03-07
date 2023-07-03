import axios from 'axios'

const URL = 'https://express-api-basic.vercel.app'; // API pruebas Mara

export const logUser = async (body) => {
    let res = await axios.post(`${URL}/auth/login`,body)

    return res.data
}
