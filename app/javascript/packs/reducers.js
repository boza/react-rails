import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as BookmarkReducer } from './sagas/bookmark'

const rootReducer = combineReducers({
  form: formReducer,
  bookmark: BookmarkReducer
})

export default rootReducer
