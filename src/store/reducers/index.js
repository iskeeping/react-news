import {combineReducers} from 'redux'
import {GET_INDEX_DATA, GET_DETAIL_DATA, GET_RESULT_DATA} from '../actions'

const initialState = {
  indexData: {},
  detailData: {},
  resultData: {}
}

function initDataCenter(state = initialState, action) {
  switch (action.type) {
    case GET_INDEX_DATA:
      return Object.assign({}, state, {
        indexData: action.json
      })
    case GET_DETAIL_DATA:
      return Object.assign({}, state, {
        detailData: action.json
      })
    case GET_RESULT_DATA:
      return Object.assign({}, state, {
        resultData: action.json
      })
    default:
      return state
  }
}

const dataCenter = combineReducers({
  initDataCenter
})

export default dataCenter
