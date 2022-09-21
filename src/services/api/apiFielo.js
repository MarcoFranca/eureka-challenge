import axios from "axios";
import {fieloUrl, fieloKey, apiUsers} from "./apiConfig";

//**** api connection authorization function ****
//**** and token capture for access          ****

const tokenGenerator = (route, setState) => {
    axios.post(`${fieloUrl}/auth`,{
        headers: {
            'x-app-id': {fieloKey}
        }})
        .then(response => {
            console.log(response.data.token)
            validateToken(response.data.token, apiUsers, setState)
        })
        .catch(error => console.log(error))
}

//**** API token validate function ****

const  validateToken = (token, route, setState) => {
    axios.get(`${fieloUrl}${route}`, {
        headers: {
            'x-access-token': token
        }})
        .then(response => {
            setState(response.data)
            console.log(response.data)})
        .catch(error => console.log(error))
}

//**** API get method function ****

export const getApi  = (route, setState) =>{
    tokenGenerator(route, setState,)
    }

