import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";

const options = {
headers: {
    Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGVjYWU0YTNiNTc1NTJlMjM3NGY5NzNjM2ExOTdkZCIsIm5iZiI6MTc0MjExNjAwNS4xMjYwMDAyLCJzdWIiOiI2N2Q2OTRhNWY2YjhkNTdiNGE3Yjk0NjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.uNzw2E2_UXvPgZyC-Y1jQk4wNFyeQtZa3V9kx-jm4-g",
},
};

export const fetchTrendMovies = async (time, page) => {
console.log(time, page);
const url = `/3/trending/movie/${time}?language=en-US&page=${page}`;
const response = await axios(url, options);
return response.data;
};

export const fetchMoviesByQuery = async (query, page) => {
console.log(query, page);
const url = `/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
const response = await axios.get(url, options);
return response.data;
};

export const fetchMoviesById = async (id) => {
console.log(id);
const url = `/3/movie/${id}?language=en-US`;
const response = await axios.get(url, options);
return response.data;
};

export const fetchReviews = async (id, page) => {
console.log(id, page);
const url = `/3/movie/${id}/reviews?language=en-US&page=${page}`;
const response = await axios.get(url, options);
return response.data.results;
};

export const fetchCredits = async (id) => {
const url = `/3/movie/${id}/credits?language=en-US`;
const response = await axios.get(url, options);
return response.data.cast;
};