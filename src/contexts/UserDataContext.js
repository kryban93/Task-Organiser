import React, { useContext, useState, useEffect } from 'react';
import { database } from '../firebase';
import randomId from '../additional/randomId';

const UserDataContext = React.createContext();

export function useUserData() {
  return useContext(UserDataContext);
}

export const UserDataProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState();
  const [tasksCollection, setTasksCollection] = useState();
  const [tagsArray, setTagsArray] = useState([]);
  const usersRef = database.collection('users');
  const TEMPORARY_USER_ID = '5VKw2Rj6G8XgDBHO6JVInPmJOeI2';

  useEffect(() => {
    readTagsArray();
  }, []);

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

  const addTag = async (tag) => {
    let tempUser, tempTagsArray;
    await usersRef
      .doc(TEMPORARY_USER_ID)
      .get()
      .then((doc) => {
        if (doc.exists) {
          tempUser = doc.data();
        }
      });
    tempTagsArray = tempUser.tags;
    tempTagsArray.push(tag);
    await usersRef.doc(TEMPORARY_USER_ID).update({
      tags: tempTagsArray,
    });
  };

  const readTagsArray = () => {
    let tempUser, tempTagsArray;
    usersRef.doc(TEMPORARY_USER_ID).onSnapshot((doc) => {
      if (doc.exists) {
        tempUser = doc.data();
        tempTagsArray = tempUser.tags;
        setTagsArray(tempTagsArray);
      } else {
        tempTagsArray = [];
        setTagsArray(tempTagsArray);
      }
    });
  };

  const submitTaskFn = async (
    title,
    finishDate,
    finishTime,
    tagsArray,
    category,
    additionalText,
    repeatableArray
  ) => {
    const created = new Date();
    const taskId = randomId();
    await usersRef
      .doc(TEMPORARY_USER_ID)
      .collection('tasks')
      .doc(`${taskId}`)
      .set({
        title,
        finishDate,
        finishTime,
        tagsArray,
        category,
        additionalText,
        created,
        isFinished: false,
        taskId: taskId,
        repeatableArray,
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

  const changeTaskFinishState = async (taskId) => {
    let tempTask;
    await usersRef
      .doc(TEMPORARY_USER_ID)
      .collection('tasks')
      .doc(`${taskId}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          tempTask = doc.data();
        }
      });

    await usersRef.doc(TEMPORARY_USER_ID).collection('tasks').doc(`${taskId}`).update({
      isFinished: !tempTask.isFinished,
    });
  };

  const value = {
    activeUser,
    createUserInFirestore,
    authUserWithFirestore,
    submitTaskFn,
    trackTasksCollection,
    tasksCollection,
    changeTaskFinishState,
    addTag,
    tagsArray,
    readTagsArray,
  };

  return <UserDataContext.Provider value={value}>{children}</UserDataContext.Provider>;
};
