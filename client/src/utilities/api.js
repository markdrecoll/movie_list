import axios from "axios";

// api.themoviedb.org is a database of movie information
export default {
    getMovies: function(pageNum) {
        return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1df04ca996543b128cb22b26d7434611&language=en-US&page=${pageNum}`);
    }
};