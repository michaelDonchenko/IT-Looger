import React from 'react'
import Moment from 'react-moment'
import {connect} from 'react-redux'
import {deleteLog, setCurrent} from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const LogItem = ({log , deleteLog, setCurrent}) => {

  const onDelete = () => {
    deleteLog(log._id)
    M.toast({ html: 'Log Deleted'})
  }

  const onClick = () => {
    setCurrent(log)
  }

  return (
    <li className="collection-item">
      <div>
       <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`} 
       onClick={onClick}>
         {log.attention ? log.message + ' "Important"' : log.message}<br/>
         <span className="grey-text">
            <span className="black-text">ID #{log._id} </span>  last updated by
            {
              log.tech ? (<span className="black-text"> {log.tech.name} {log.tech.lastName} </span>) : 
              (<span> No Technichian chosen </span>)
            }
            
            On <Moment format='MMMM Do YYYY, h:mm a'>{log.date}</Moment>
         </span>
       </a>
       <a href="" onClick={onDelete} className="secondary-content">
       <i class="material-icons grey-text">delete</i>
       </a>
      </div>
    </li>
  )
}


export default connect(null, {deleteLog, setCurrent})(LogItem)
