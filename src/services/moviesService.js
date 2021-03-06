import 'whatwg-fetch';
import storageService from './storageService';

const API_KEY = 'cf942ddaa74502ade57d94a0f0e403a2';
const API_URL = 'https://api.themoviedb.org/3/';
const CONFIG_STORAGE_KEY = 'movie-db-configuration';

const initConfiguration = async() => {
    let requestUrl = `${API_URL}configuration?api_key=${API_KEY}`;
    let res = await fetch(requestUrl);
    let result = await res.json();
    storageService.set(CONFIG_STORAGE_KEY, result);
};

const getMoviePosterFullPath = (posterPath, size) => {
    let config = storageService.get(CONFIG_STORAGE_KEY);
    return `${config.images.base_url}${size}${posterPath}`;
}

const getMoviesByTitle = async(query) => {
    let requestUrl = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
    let fetchResult = await fetch(requestUrl);
    let jsonResult = await fetchResult.json();
    jsonResult.results.forEach(movie => {
        movie.poster_path = getMoviePosterFullPath(movie.poster_path, 'w185');
    });
    return jsonResult;
};

export default {
    getMoviesByTitle,
    initConfiguration
};