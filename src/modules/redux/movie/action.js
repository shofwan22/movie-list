import { axios } from "libraries"
import actionType from "./actionType"
import qs from "querystring"

const apiUrl = "http://www.omdbapi.com"
const apiKey = "faf7e5bb";

export const getAllMovie = (data, type) => {
    return (dispatch) => {
        const params = qs.stringify(data)
        return axios.get(`${apiUrl}?apikey=${apiKey}&${params}`)
            .then(response => {
                if (type === 'search')
                    dispatch(getMovie(response.data.Search))
                else if(type === 'scroll')
                    dispatch(getMovieScroll(response.data.Search))
                else if(type === 'detail')
                    dispatch(getMovieDetail(response.data))
                
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
})

export const getMovieDetail = (value) => ({
  type: actionType.GET_MOVIE_DETAIL,
  value,
})
