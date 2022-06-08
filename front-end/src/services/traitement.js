import axios from 'axios';
const URL= 'http://localhost:5000/Analyse'

export default async function analyse(){
    return await axios.get(`${URL}/getsize`)
}