const axios = require('axios');

axios.defaults.baseURL = 'https://dummyjson.com/';



async function getData(path = '') {
try {
    const ax = await axios.get(path);
    return ax.data;
} catch (error) {
throw new Error(error);
}

};

export {getData};