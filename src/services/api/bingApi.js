import axios from "axios";

const options = {
    origin: 'http://localhost:3000',
    method: 'get',
    url: 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR',

};

export const  getBackground = async () => { await axios.request(options)
    .then(function (response) {

        let urlImg = 'https://www.bing.com'+ response.data.images[0].url
        localStorage.setItem('urlImg',urlImg)


    }).catch(function (error) {
        console.error(error);
    })
}
