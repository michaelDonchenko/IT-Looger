import {
  GET_LOGS, 
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS,
  UPDATE_LOG,
  FILER_LOGS,
  CLEAR_FILTER,
} from './types'

//get logs 
export const getLogs = () => async dispatch => {
 try {
  setLoading()
  const res = await fetch('/logs')
  const data = await res.json()

  dispatch({
    type: GET_LOGS,
    payload: data
  })

 } catch (err) {
  console.log(err)
   dispatch({
     type:LOGS_ERROR,
     payload: err
   })
 }
}

//add new log
export const addLog = (log) => async dispatch => {
  try {
   setLoading()
   const res = await fetch('/logs', {
     method: 'POST',
     body: JSON.stringify(log),
     headers: {
       'Content-Type': 'application/json'
     }
   })
   const data = await res.json()
 
   dispatch({
     type: ADD_LOG,
     payload: data
   })
 
  } catch (err) {
    dispatch({
      type:LOGS_ERROR,
      payload: err
    })
  }
 }

 //delete log 
export const deleteLog = (id) => async dispatch => {
  try {
   setLoading()
   await fetch(`/logs/${id}`, {
     method: 'DELETE'
   })
 
   dispatch({
     type: DELETE_LOG,
     payload: id
   })
 
  } catch (err) {
    dispatch({
      type:LOGS_ERROR,
      payload: err
    })
  }
 }

 //update log
export const updateLog = (log) => async dispatch => {
  try {
   setLoading()
   const res = await fetch(`/logs/update/${log.id}`, {
     method: 'PUT',
     body: JSON.stringify(log),
     headers: {
       'Content-Type': 'application/json'
      }
   })

   const data = await res.json()
 
   dispatch({
     type: UPDATE_LOG,
     payload: data,
   })
 
  } catch (err) {
    dispatch({
      type:LOGS_ERROR,
      payload: err.response
    })
  }
 }

 //Search logs
//  export const searchLogs = (text) => async dispatch => {
//   try {
//    setLoading()
//    const res = await fetch(`/logs?q=${text}`)
//    const data = await res.json()
 
//    dispatch({
//      type: SEARCH_LOGS,
//      payload: data
//    })
 
//   } catch (err) {
//     dispatch({
//       type:LOGS_ERROR,
//       payload: err
//     })
//   }
//  }

//filter contacts
export const filterLogs = text => async dispatch => {
  dispatch
  ({
    type: FILER_LOGS, payload: text
  })
}

//clear filter
export const clearFilter = () => async dispatch => {
  dispatch({type: CLEAR_FILTER})
}

 
//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}

//set current log 
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log
  }
}

//clear current log 
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  }
}