import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import '../../Css/logModal.css'
import {connect} from 'react-redux'
import { addLog, getLogs } from '../../actions/logActions'
import TechSelectOption from '../tech/TechSelectOption'


 const AddLogModal = ({ addLog, log: {logs}, getLogs }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

 const onSubmit = async () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' });
    } if (logs.error) {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      }
      await addLog(newLog)
      await getLogs()
      // Clear Fields
      setMessage('');
      setTech('');
      setAttention(false);

    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      }

      addLog(newLog)
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
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              className='myTextInput'
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active myLable'>
              Log Message
            </label>
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
        <a style={{marginRight: '10px'}}
          href='#!'
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
  log: state.logs
})

export default connect(mapStateToProps, {addLog, getLogs})(AddLogModal)
