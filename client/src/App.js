import React, {useEffect, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/tech/AddTechModal';
import TechListModal from './components/tech/TechListModal';
import {Provider} from 'react-redux'
import store from './store'

function App() {

  useEffect(() => {
    //initialize materialize js
    M.AutoInit()
  },[])

  return (

   <Provider store={store}>

    <div className="App">
      <SearchBar />
      <div className="main container"> 
        <Fragment >
          <Logs />
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
        </Fragment>
      </div>
    </div>

   </Provider>
  );
}

export default App;
