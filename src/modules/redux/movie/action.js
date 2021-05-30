import { axios } from "libraries"
import actionType from "./actionType"
import qs from "querystring"

const apiUrl = "http://www.omdbapi.com";
const apiKey = "faf7e5bb";

export const getAllMovie = (data, type) => {
    return (dispatch) => {
        const params = qs.stringify({
            apikey: apiKey,
            s: data.search,
            page: data.page
        })
        return axios.get(`${apiUrl}?${params}`)
            .then(response => {
                if (type === 'search')
                    dispatch(getMovie(response.data.Search));
                else 
                    dispatch(getMovieScroll(response.data.Search))
            })
            .catch(error => {
                throw(error)
            })
    }
}

export const getMovie = value => ({
    type: actionType.GET_MOVIE,
    value
}) 

export const getMovieScroll = (value) => ({
  type: actionType.GET_MOVIE_SCROLL,
  value,
}); 
