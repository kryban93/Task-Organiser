import React, { useContext } from 'react';

const UserDataContext = React.createContext();

export function useUserData() {
  return useContext(UserDataContext);
}

export const UserDataProvider = ({ children }) => {
  const value = {};

  return <UserDataContext.Provider value={value}>{children}</UserDataContext.Provider>;
};
