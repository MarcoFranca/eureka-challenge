import axios from "axios";
import {bingUrl} from "./apiConfig";

export const  getBackground = (setURL, setTitle) => {
    axios.get(bingUrl)
    .then((response) => {
        setURL(`https://www.bing.com${response.data.images[0].url}`)
        setTitle(response.data.images[0].copyright)
    })
   .catch(function (error) {
        console.error(error);
   })
}