import axios from "axios";
import {bingUrl} from "./apiConfig";

export const  getBackground = () => {
    axios.get(`${bingUrl}`)
    .then(function (response) {
        sessionStorage.setItem('urlImg',`https://www.bing.com${response.data.images[0].url}`)
    })
   .catch(function (error) {
        console.error(error);
   })
}