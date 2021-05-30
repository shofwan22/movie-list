import actionType from "./actionType"

const initialState = {}

const movie = (state = initialState, action) => {
    switch(action.type) {
        case actionType.GET_MOVIE:
            return {
                ...state,
                ...action.value
            }
        default: 
            return state
    }
}

export default movie