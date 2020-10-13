import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getTechs} from '../../actions/techActions'

function TechSelectOption({getTechs, tech: {techs, loading}}) {

  useEffect(() => {
    getTechs()
  },[])

  return (
   !loading && techs !== null && techs.map(t => (
     <option key={t._id} value={(t._id)}>
        {t.name} {t.lastName}
     </option>
   )) 
  
  )
}

const mapStateToProps = state => ({
  tech: state.tech
})

export default connect(mapStateToProps, {getTechs})(TechSelectOption)
