import React, { useContext, useState } from 'react';
import { database } from '../firebase';

const UserDataContext = React.createContext();

export function useUserData() {
  return useContext(UserDataContext);
}

export const UserDataProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState();
  const [tasksCollection, setTasksCollection] = useState();
  const usersRef = database.collection('users');
  const TEMPORARY_USER_ID = '5VKw2Rj6G8XgDBHO6JVInPmJOeI2';

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

    await usersRef
      .doc(user.user.uid)
      .get()
      .then((doc) => {
        tempUser = doc.data();

        setActiveUser(tempUser);
      })
      .catch((error) => {
        console.log(`${error.code} : ${error.message}`);
      });
  };

  const submitTaskFn = async (
    title,
    finishDate,
    finishTime,
    tagsArray,
    category,
    additionalText
  ) => {
    const created = new Date();
    await usersRef
      .doc(TEMPORARY_USER_ID)
      .collection('tasks')
      .add({
        title,
        finishDate,
        finishTime,
        tagsArray,
        category,
        additionalText,
        created,
        isFinished: false,
      })
      .then(() => {
        console.log('Created task in user');
      })
      .catch((error) => {
        console.log('error creating task: ', error);
      });
  };

  const trackTasksCollection = async () => {
    usersRef
      .doc(TEMPORARY_USER_ID)
      .collection('tasks')
      .onSnapshot((snapshotQueries) => {
        const tempTasksArray = [];

        snapshotQueries.forEach((doc) => {
          tempTasksArray.push(doc.data());
        });

        const sortedTasksArray = tempTasksArray.sort((a, b) => {
          return new Date(a.created) - new Date(b.created);
        });
        setTasksCollection(sortedTasksArray);
      });
  };

  const value = {
    activeUser,
    createUserInFirestore,
    authUserWithFirestore,
    submitTaskFn,
    trackTasksCollection,
    tasksCollection,
  };

  return <UserDataContext.Provider value={value}>{children}</UserDataContext.Provider>;
};
