import React, {createContext, useState, ReactElement} from 'react';
import auth from '@react-native-firebase/auth';
// import {User} from '@react-native-google-signin/google-signin';

export const AuthContext = createContext({
  user: null,
  setUser: (_value: User | null) => {},
  login: (_email: string, _password: string) => {},
  register: (_email: string, _password: string) => {},
  logout: () => {},
});

export const AuthProvider = ({children}: {children: ReactElement}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
