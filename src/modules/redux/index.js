import { combineReducers, createStore, thunk, applyMiddleware } from "libraries"
import movie from "./movie/reducer"

/**
 * Reducer
 */
export const reducer = combineReducers({
    movie
})

/**
 * Store
 */
export const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

/**
 * Dispatcher
 */
export * from "./movie/action"

/**
 * Selector
 */
export * from "./movie/selector"

