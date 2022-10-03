import axios from "axios";
import {fielo} from "./apiConfig";

//**** api connection authorization function ***********
//**** and token capture for access          ***********

export const tokenGenerator = (setToken) => {
    axios.post(`${fielo.url}/auth`,{
        headers: {
            'x-app-id': fielo.Key
        }})
        .then(response => {
            setToken(response.data.token)
        })
        .catch(error => console.log(error))
}

//**** API token validate function ****

//nesta função deve ser passado o token gerado pela função tokeGenerator,
// a rota do acesso desejada, contida no apiconfig e o setState desejado para captura da informação.

export const  getFielo = (token, route, setState) => {
    axios.get((fielo.url + route), {
        headers: {
            'x-access-token': token
        }})
        .then(response => {
            setState(response.data)
        })
        .catch(error => console.log(error))
}
export const  getUserProfile = (token, route, setState, setProgId, setLevelId) => {
    axios.get((fielo.url + route), {
        headers: {
            'x-access-token': token
        }})
        .then(response => {
            setState(response.data)
            setProgId(response.data.programId)
            setLevelId(response.data.levelId)
        })
        .catch(error => console.log(error))
}



