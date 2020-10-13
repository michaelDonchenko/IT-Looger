import React, { useEffect} from 'react'
import {connect} from 'react-redux'
import LogItem from './LogItem'
import Preloader from '../layout/Preloader'
import { getLogs,} from '../../actions/logActions'


const Logs = ({ log: {logs, filtered, loading}, getLogs,}) => {
  
  useEffect(() => {
    getLogs()
  },[])


  if (loading || logs === null) {
    return <Preloader />
  }

  return (
      <ul className="collection with-header">
        <li className="collection-header"><h4 className="center">System Logs</h4></li>
        {
           logs && !filtered ? (logs.map(log => <LogItem key={log._id}  log={log}/>)) 
          : 
          (filtered && filtered.map((log) => <LogItem key={log._id}  log={log}/>))
        }    
      </ul>
  )
}

const mapStateToProps = state => ({
  log: state.logs
})

export default connect(mapStateToProps, {getLogs,})(Logs)
