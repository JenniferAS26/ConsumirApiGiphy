const fetchData = require('../utils/fetchData');
let keyWord = "dog"; // input
const API = 'https://api.giphy.com/v1/gifs/search?q=`${keyWord}`&api_key=kr1C7fEkywRpnQcb8YR4ac82eIaFtBwq&limit=5&offset=1';

fetchData(API)
    .then(results => {
        // let urlImg = results.data[0].images.original.url;
        let imgs = results.data;
        let imgList = [];
        for (let img of imgs) {
            // console.log(img.images.original.url);
            imgList.push(img.images.original.url);
        }
        console.log(imgList);
        // return urlImg;
    })
    .catch(err => console.error(err))

