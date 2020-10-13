import {
  GET_LOGS, 
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
  FILER_LOGS,
  CLEAR_FILTER,
} from '../actions/types'


const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
  filtered: null
}


export default (state = initialState, action) => {
  switch(action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      }
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      }  
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
        loading: false,
      } 
    case UPDATE_LOG:
      console.log(action.payload)
      return {
        ...state,
        logs: state.logs.map(log => log.id === action.payload.id ? (action.payload) : (log))
      }  
      case SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload
      }  
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
       
      } 
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      } 
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case FILER_LOGS:
      return {
        ...state,
        filtered: state.logs.filter(log => {
          //creating regular expression with global && not sensetive
          const regex = RegExp(`${action.payload}`, 'gi')
          //this will return anything the text we passed match in with the message 
          return log.message.match(regex)
        })
      }
      case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      }
      
    default:
      return state
  }
}