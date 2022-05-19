import { legacy_createStore as createStore , applyMiddleware } from 'redux'
import { reducer } from './Reducer'
import logger from 'redux-logger'

export const Store = createStore(reducer,applyMiddleware(logger))
