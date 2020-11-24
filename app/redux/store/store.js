import { createStore, combineReducers } from 'redux';
import UserData from '../reducer/reducer'


let allReducer = combineReducers({
    UserData: UserData
})

let store = createStore(allReducer)

export default store;