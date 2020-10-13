import React, {useState} from 'react'
import {connect} from 'react-redux'
import {filterLogs, clearFilter} from '../../actions/logActions'

const SearchBar = ({filterLogs, clearFilter}) => {
  
  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e.target.value)
   if (e.target.value !== undefined) {
     filterLogs(e.target.value)
   } else {
      clearFilter()
   }
  }

  return (
  <nav>
    <div className="nav-wrapper" style={{backgroundColor:'#3949ab'}}>
      <form>
        <div className="input-field">
          <input id="search" type="search" value={text} onChange={e => onChange(e)} placeholder="Filter logs by Message"/>
          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
          <i type="submit" className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  )
}

export default connect(null, {filterLogs, clearFilter})(SearchBar)
