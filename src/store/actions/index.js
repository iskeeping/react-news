/*
 * action types
 */

export const GET_INDEX_DATA = 'GET_INDEX_DATA'
export const GET_DETAIL_DATA = 'GET_DETAIL_DATA'
export const GET_RESULT_DATA = 'GET_RESULT_DATA'

/*
 * action creators
 */

export function getIndexData(json) {
  return {type: GET_INDEX_DATA, json}
}

export function getDetailData(json) {
  return {type: GET_DETAIL_DATA, json}
}

export function getResultData(json) {
  return {type: GET_RESULT_DATA, json}
}
