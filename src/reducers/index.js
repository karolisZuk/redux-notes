import {combineReducers} from 'redux'
import todos from './todos.reducer'
import filters from './filters.reducer'

export default combineReducers({
    todos,
    filters
})