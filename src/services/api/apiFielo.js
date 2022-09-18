import axios from "axios";
import {fieloUrl, fieloKey } from "./apiKey";

export const authUseur = () => {
    axios.post(`${fieloUrl}/auth`,{
        headers: {
            'x-app-id': {fieloKey}
        }})
        .then(response => {
            localStorage.setItem('fieloToken',response.data.token)
            console.log(response.data.token)
        })
        .catch(error => console.log(error))
}

export const  getUsers = async () => {
    await axios.get(`${fieloUrl}/users`, {
        headers: {
            'x-access-token': localStorage.getItem('fieloToken')
        }
    })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => console.log(error))
}






