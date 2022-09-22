import axios from "axios";
import {fieloUrl, fieloKey} from "./apiConfig";

//**** api connection authorization function ****
//**** and token capture for access          ****

export const tokenGenerator = (setToken) => {
    axios.post(`${fieloUrl}/auth`,{
        headers: {
            'x-app-id': {fieloKey}
        }})
        .then(response => {
            console.log(response.data.token)
            setToken(response.data.token)
        })
        .catch(error => console.log(error))
}

//**** API token validate function ****

export const  validateToken = (token, route, setState) => {
    axios.get(`${fieloUrl}${route}`, {
        headers: {
            'x-access-token': token
        }})
        .then(response => {
            setState(response.data)
            console.log(`${fieloUrl}${route}`)
            console.log(response.data)})
        .catch(error => console.log(error))
    }

//**** API get method function ****



