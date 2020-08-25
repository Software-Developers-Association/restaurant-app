import React from 'react';
import Main from './views/Main';
import RESTaurant from './views/RESTaurant';
import {UserContext} from './context/UserContext';

function App() {
  const cookie = document.cookie;

  // "key=value" split on = yields => ["key", "value"]

  const tuples = cookie === "" ? [] : cookie.split(';');
  const json = {};

  for(let i = 0; i < tuples.length; ++i) {
    const [key, value] = tuples[i].split('=');

    json[key] = value;
  }

  console.log(json);

  const [isAuth, setIsAuth] = React.useState(json.isAuth === 'true');
  const [user, setUser] = React.useState(null);
  const isLoggedIn = user !== null && user !== undefined;

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        {
          isLoggedIn ?
          <RESTaurant user={user} />
          :
          <Main
            authCallback={
              (success) => {
                document.cookie = "isAuth="+ success;
                setIsAuth(success);
              }
            }
           />
        }
      </UserContext.Provider>
    </>
  );
}

export default App;
