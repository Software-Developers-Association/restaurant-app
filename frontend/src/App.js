import React from 'react';
import Main from './views/Main';
import RESTaurant from './views/RESTaurant';
import {useUserState} from './context/UserContext';

function App() {
  const user = useUserState();

  return (
    <>
        {
          user !== null && user !== undefined ?
          <RESTaurant />
          :
          <Main />
        }
    </>
  );
}

export default App;
