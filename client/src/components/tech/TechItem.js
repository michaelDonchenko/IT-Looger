import React from 'react'
import {connect} from 'react-redux'
import {deleteTech} from '../../actions/techActions'


const TechItem = ({ tech: { _id, name, lastName }, deleteTech}) => {
  const onDelete = () => {
    deleteTech(_id)
  }

  return (
    <li className='collection-item'>
      <div>
        {name} {lastName}
        <a href='' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  )
}

export default connect(null, {deleteTech})(TechItem)