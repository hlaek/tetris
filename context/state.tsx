// src/context/state.js
import React, { useState } from 'react';
import { createContext, useContext } from 'react';

export type GlobalState = {
    state: string, 
    setState?: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<GlobalState>({
    state: 'default',
})

export const AppContextWrapper: React.FC = ({ children }) =>{
    const [state, setState] = useState<string>('default')

  return (
    <AppContext.Provider value={{state, setState}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}