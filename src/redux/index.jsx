import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import authReducer from './reducers/authReducers'



let reducer = combineReducers({
    auth: authReducer,


})
const middleware = s => next => action => {
    if (typeof action === 'function') {
        return action(s.dispatch, s.getState())
    }
    return next(action)
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer, composeEnhancers(applyMiddleware(middleware)))


export default store