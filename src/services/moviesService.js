import 'whatwg-fetch';

const API_KEY = 'cf942ddaa74502ade57d94a0f0e403a2';
const API_URL = 'https://api.themoviedb.org/3/';

const getMoviesByTitle = async(query) => {
    let requestUrl = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
    let result = await fetch(requestUrl);
    return result.json();
};

export default {
    getMoviesByTitle
};