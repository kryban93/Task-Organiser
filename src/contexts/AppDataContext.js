import React, { useContext, useState } from 'react';

const AppDataContext = React.createContext();

export function useAppData() {
  return useContext(AppDataContext);
}

export const AppDataProvider = ({ children }) => {
  const [selectedView, setSelectedView] = useState('');

  const value = {
    selectedView,
    setSelectedView,
  };

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
};
