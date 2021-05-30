import actionType from "./actionType"

const initialState = {
    items: [],
    detail: {}
}

const movie = (state = initialState, action) => {
    switch(action.type) {
        case actionType.GET_MOVIE:
            return {
                ...state,
                items: action.value
            }
        case actionType.GET_MOVIE_SCROLL:
            return {
                ...state,
                items: state.items.length > 0 ? state.items.concat(action.value) : action.value
            }
        case actionType.GET_MOVIE_DETAIL: 
            return {
                ...state,
                detail: action.value
            }
        default: 
            return state
    }
}

export default movie