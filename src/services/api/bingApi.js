import axios from "axios";
import {bingUrl} from "./apiConfig";

export const  getBackground = (setURL) => {
    axios.get(bingUrl)
    .then((response) => {
        setURL(`https://www.bing.com${response.data.images[0].url}`)
    })
   .catch(function (error) {
        console.error(error);
   })
}