import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducers from './reducers'

const middleware = [thunk];
const initital_state = {}
const store = createStore(
    rootReducers,
    initital_state,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;