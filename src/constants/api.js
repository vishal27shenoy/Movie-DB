import axios from "axios";
import { key } from "./key";
const API_BASE_URL = 'https://api.themoviedb.org/3/';
export const TRENDING_MOVIE = `${API_BASE_URL}trending/movie/day?api_key=${key}`;
export const UPCOMING_MOVIE = `${API_BASE_URL}movie/upcoming?api_key=${key}`;
export const TOP_RATED_MOVIE = `${API_BASE_URL}movie/top_rated?api_key=${key}`;


const movieCreditsEndpoint = id =>
  `${API_BASE_URL}/movie/${id}/credits?api_key=${key}`;
const personDetail = id => `${API_BASE_URL}/person/${id}?api_key=${key}`;
const personMovie = id =>  `${API_BASE_URL}/person/${id}/movie_credits?api_key=${key}`;
const searchMoviesEndpoint = `${API_BASE_URL}/search/movie?api_key=${key}`;
const similarMoviesEndpoint = id =>`${API_BASE_URL}/movie/${id}/similar?api_key=${key}`;
  
const apiCall = async(endpoint,params) => {
    const options = {
        method : 'GET',
        url : endpoint,
        params : params ? params : {}
    };
    try{
        const response = await axios.request(options);
        return response;
    }catch(err){
        console.log(err);
        return {response : err?.message,iserror:true};
    }
}

export const getTrendingMovies = (endpoint) => {
     return apiCall(endpoint);
};

export const getUpCommingMovies = endpoint => {
  return apiCall(endpoint);
};

export const getTopRatedMovies = endpoint => {
  return apiCall(endpoint);
};

export const fetchMovieCredits = movieId => {
    console.log("came here",movieId)
  return apiCall(movieCreditsEndpoint(movieId));
};


export const getPersonInfo = (id) => {
  return apiCall(personDetail(id));
}

export const getPersonMovie = (id) => {
  return apiCall(personMovie(id));
}

export const getSearchMovie = (value) => {
  console.log(value);
  return apiCall(searchMoviesEndpoint,value);
}

export const getsimilarMovie = (id) => {
  console.log(id);
  return apiCall(similarMoviesEndpoint(id));
}