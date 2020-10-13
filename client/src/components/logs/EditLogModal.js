import React, {useState, useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import {connect } from 'react-redux'
import {getLogs, updateLog} from '../../actions/logActions'
import TechSelectOption from '../tech/TechSelectOption'


 const EditLogModal = ({updateLog, current,getLogs}) => {
  const [id, setId] =useState('') 
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (current) {
      setId(current._id)
      setMessage(current.message)
      setAttention(current.attention)
      setTech(current.tech)
    }
  },[current])

  const onSubmit = async () => {
    if (message === null && tech === null) {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      const updatedLog = {
        id,
        message,
        attention,
        tech,
        date: new Date()
      }
      await updateLog(updatedLog)
      M.toast({ html: `Log updated by ${tech}` });

      // Clear Fields
      setMessage('');
      setTech('');
      setAttention(false);
    }
    
  };

  const modalStyle = {
    width: '75%',
    height: '75%'
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Edit Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              className='myTextInput'
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={e => setTech(e.target.value)}
            >
              <option value='Select Technician'>
                Select Technician
              </option>
              <TechSelectOption />
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a type="submit" style={{marginRight: '10px'}}
          href=''
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  current: state.logs.current
})


export default connect(mapStateToProps, {updateLog,getLogs} )(EditLogModal)
