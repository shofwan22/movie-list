import actionType from "./actionType"

export const getMovie = value => ({
    type: actionType.GET_MOVIE,
    value
}) 