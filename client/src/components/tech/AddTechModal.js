import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import '../../Css/logModal.css'
import {connect} from 'react-redux'
import {addTech} from '../../actions/techActions'

 const AddTechModal = ({addTech}) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  

  const onSubmit = () => {
    if (name === '' || lastName === '') {
      M.toast({ html: 'Please enter first and lst name' });
    } else {
      const newTech = {
        name,
        lastName
      }

      addTech(newTech)
      M.toast({ html: `New tech ${name} ${lastName} added` });

      // Clear Fields
      setName('');
      setLastName('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              className='myTextInput'
              type='text'
              name='firstName'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label htmlFor='firstName' className='active myLable'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              className='myTextInput'
              type='text'
              name='lastName'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active myLable'>
              Last Name
            </label>
          </div>
        </div>

      </div>
      <div className='modal-footer'>
        <a style={{marginRight: '10px'}}
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



export default connect(null, {addTech})(AddTechModal)
