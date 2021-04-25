import React, { useContext, useState } from 'react';
import { database } from '../firebase';

const UserDataContext = React.createContext();

export function useUserData() {
  return useContext(UserDataContext);
}

export const UserDataProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState();
  const usersRef = database.collection('users');

  const createUserInFirestore = async (user, name) => {
    const tempUser = {
      email: user.user.email,
      uid: user.user.uid,
      userName: name,
    };

    await usersRef.doc(user.user.uid).set(tempUser);

    setActiveUser(tempUser);
  };

  const authUserWithFirestore = async (user) => {
    let tempUser;

    console.log('start processing data');
    await usersRef
      .doc(user.user.uid)
      .get()
      .then((doc) => {
        tempUser = doc.data();
      });

    setActiveUser(tempUser);
    console.log(tempUser);
  };

  const value = {
    activeUser,
    createUserInFirestore,
    authUserWithFirestore,
  };

  return <UserDataContext.Provider value={value}>{children}</UserDataContext.Provider>;
};
