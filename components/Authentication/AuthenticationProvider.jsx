import React, { useState, useEffect, createContext } from "react";

// Utilities
import { Auth } from "aws-amplify";

const UserContext = createContext([
  {}, // empty object initially
  () => {}, // empty function initially
]);

const AuthenticationProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, AuthenticationProvider };
