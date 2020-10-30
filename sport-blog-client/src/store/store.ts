import { createStore, applyMiddleware } from 'redux'
import { initialState, reducer } from "./reducers/reducer";
import thunk from 'redux-thunk'

// This function create the store, using the reducer object.
// The initial state is the inital value of the store.
// The apply middleware allows to use thunk actions
export function createStoreAndReducer() {
    return createStore(reducer, initialState, applyMiddleware(thunk))
}