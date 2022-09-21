import axios from "axios";
import {bingUrl} from "./apiConfig";

export const  getBackground = (setState, setTitle) => {
    axios.get(`${bingUrl}`)
    .then(function (response) {
        setTitle(response.data.images[0].title)
        sessionStorage.setItem('urlImg',`https://www.bing.com${response.data.images[0].url}`)
    })
   .catch(function (error) {
        console.error(error);
   })
}